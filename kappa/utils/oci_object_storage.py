import logging
from urllib.parse import urlparse

logger = logging.getLogger(__name__)


def is_oci_url(url):
    """
    Check if url is an OCI url
    """
    try:
        scheme = urlparse(url).scheme
        return scheme in ["oci"]
    except ValueError:
        return False


# 'oci://henry_test/kappa/IrisClassifier/20210527183535_867846.tar.gz'
def download_oos_to_file(url, file_object) -> bool:
    try:
        url_info = urlparse(url)
        if url_info.scheme not in ["oci", "oos"]:
            logger.error("bad url")
            return False
        bucket_name = url_info.netloc
        object_name = url_info.path
        config = oci.config.from_file()
        object_storage_client = oci.object_storage.ObjectStorageClient(config)
        namespace = object_storage_client.get_namespace().data
        get_obj = object_storage_client.get_object(namespace, bucket_name, object_name)
        for chunk in get_obj.data.raw.stream(1024 * 1024, decode_content=False):
            file_object.write(chunk)
        return True
    except Exception as e:
        logger.error(str(e))
        raise e


def create_oci_bucket_if_not_exists(bucket_name, region):
    import oci
    compartment_id = "ocid1.compartment.oc1..aaaaaaaagevax6cgnipfpmkmd3h7ypj4gun7ur3xnjww7fsvuljfuptmh3tq"

    try:
        config = oci.config.from_file()
        object_storage_client = oci.object_storage.ObjectStorageClient(config)
        namespace = object_storage_client.get_namespace().data
        bucket_info = object_storage_client.get_bucket(namespace_name=namespace,
                                                       bucket_name=bucket_name)
        bucket_details = oci.object_storage.models.CreateBucketDetails(
            name=bucket_name,
            compartment_id=compartment_id,
            public_access_type='ObjectRead',
        )
        logger.debug("Found bucket %s in region %s already exist", bucket_name, region)
    except oci.exceptions.ServiceError as error:
        logger.debug('Creating OCI bucket: %s in region %s', bucket_name, region)
        try:
            create_bucket_response = object_storage_client.create_bucket(
                namespace,
                oci.object_storage.models.CreateBucketDetails(
                    name=bucket_name,
                    public_access_type='ObjectRead',
                )
            )
        except oci.exceptions.ServiceError as error:
            logger.debug(f"Special OCI region {region}. Error: {error}")


if __name__ == "__main__":
    import oci, io

    fileobj = io.BytesIO()
    download_oos_to_file("oci://henry_test/kappa/IrisClassifier/20210527183535_867846.tar.gz", fileobj)

    print(oci)
    print(oci.__version__)
    compartment_id = "ocid1.compartment.oc1..aaaaaaaagevax6cgnipfpmkmd3h7ypj4gun7ur3xnjww7fsvuljfuptmh3tq"
    bucket_name = "kappa-model"
    config = oci.config.from_file()
    object_storage_client = oci.object_storage.ObjectStorageClient(config)
    namespace = object_storage_client.get_namespace().data
    bucket_info = object_storage_client.get_bucket(namespace_name=namespace, bucket_name=bucket_name)
    if bucket_info.data is None:
        create_bucket_response = object_storage_client.create_bucket(
            namespace,
            oci.object_storage.models.CreateBucketDetails(
                name=bucket_name,
                compartment_id=compartment_id,
                public_access_type='ObjectRead',
            )
        )
        print('Created a bucket:\n{}'.format(create_bucket_response.data))
        print('\n=========================\n')
