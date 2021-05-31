FROM continuumio/miniconda3:4.9.2

RUN apt-get update --fix-missing && \
    apt-get install -y build-essential && \
    apt-get clean

RUN conda update -n base -c defaults conda

#ARG KAPPA_VERSION
#ENV KAPPA_VERSION=$KAPPA_VERSION

#ARG PYTHON_VERSION
#ENV PYTHON_VERSION=$PYTHON_VERSION

## install proper python major version
#RUN conda install pip python=$PYTHON_VERSION -y
RUN conda install pip python=3.8 -y

# pre-install Kappa base dependencies
#RUN pip install kappa[model_server]==$KAPPA_VERSION --no-cache-dir
RUN pip install http://129.159.116.191:9999/Kappa-0.0.1-py3-none-any.whl --no-cache-dir

RUN pip install pytz oci tqdm

COPY entrypoint.sh /usr/local/bin/

ENTRYPOINT [ "entrypoint.sh" ]
CMD ["kappa", "serve-gunicorn", "/bento"]
