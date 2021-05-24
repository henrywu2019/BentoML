import * as $protobuf from "protobufjs";
/** Namespace kappa. */
export namespace kappa {

    /** Properties of a DeploymentSpec. */
    interface IDeploymentSpec {

        /** DeploymentSpec bento_name */
        bento_name?: (string|null);

        /** DeploymentSpec bento_version */
        bento_version?: (string|null);

        /** DeploymentSpec operator */
        operator?: (kappa.DeploymentSpec.DeploymentOperator|null);

        /** DeploymentSpec custom_operator_config */
        custom_operator_config?: (kappa.DeploymentSpec.ICustomOperatorConfig|null);

        /** DeploymentSpec sagemaker_operator_config */
        sagemaker_operator_config?: (kappa.DeploymentSpec.ISageMakerOperatorConfig|null);

        /** DeploymentSpec aws_lambda_operator_config */
        aws_lambda_operator_config?: (kappa.DeploymentSpec.IAwsLambdaOperatorConfig|null);

        /** DeploymentSpec azure_functions_operator_config */
        azure_functions_operator_config?: (kappa.DeploymentSpec.IAzureFunctionsOperatorConfig|null);

        /** DeploymentSpec aws_ec2_operator_config */
        aws_ec2_operator_config?: (kappa.DeploymentSpec.IAwsEc2OperatorConfig|null);
    }

    /** Represents a DeploymentSpec. */
    class DeploymentSpec implements IDeploymentSpec {

        /**
         * Constructs a new DeploymentSpec.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeploymentSpec);

        /** DeploymentSpec bento_name. */
        public bento_name: string;

        /** DeploymentSpec bento_version. */
        public bento_version: string;

        /** DeploymentSpec operator. */
        public operator: kappa.DeploymentSpec.DeploymentOperator;

        /** DeploymentSpec custom_operator_config. */
        public custom_operator_config?: (kappa.DeploymentSpec.ICustomOperatorConfig|null);

        /** DeploymentSpec sagemaker_operator_config. */
        public sagemaker_operator_config?: (kappa.DeploymentSpec.ISageMakerOperatorConfig|null);

        /** DeploymentSpec aws_lambda_operator_config. */
        public aws_lambda_operator_config?: (kappa.DeploymentSpec.IAwsLambdaOperatorConfig|null);

        /** DeploymentSpec azure_functions_operator_config. */
        public azure_functions_operator_config?: (kappa.DeploymentSpec.IAzureFunctionsOperatorConfig|null);

        /** DeploymentSpec aws_ec2_operator_config. */
        public aws_ec2_operator_config?: (kappa.DeploymentSpec.IAwsEc2OperatorConfig|null);

        /** DeploymentSpec deployment_operator_config. */
        public deployment_operator_config?: ("custom_operator_config"|"sagemaker_operator_config"|"aws_lambda_operator_config"|"azure_functions_operator_config"|"aws_ec2_operator_config");

        /**
         * Creates a new DeploymentSpec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeploymentSpec instance
         */
        public static create(properties?: kappa.IDeploymentSpec): kappa.DeploymentSpec;

        /**
         * Encodes the specified DeploymentSpec message. Does not implicitly {@link kappa.DeploymentSpec.verify|verify} messages.
         * @param message DeploymentSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeploymentSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeploymentSpec message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.verify|verify} messages.
         * @param message DeploymentSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeploymentSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeploymentSpec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeploymentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec;

        /**
         * Decodes a DeploymentSpec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeploymentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec;

        /**
         * Verifies a DeploymentSpec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeploymentSpec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeploymentSpec
         */
        public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec;

        /**
         * Creates a plain object from a DeploymentSpec message. Also converts values to other types if specified.
         * @param message DeploymentSpec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DeploymentSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeploymentSpec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DeploymentSpec {

        /** DeploymentOperator enum. */
        enum DeploymentOperator {
            UNSET = 0,
            CUSTOM = 1,
            AWS_SAGEMAKER = 2,
            AWS_LAMBDA = 3,
            AZURE_FUNCTIONS = 4,
            AWS_EC2 = 5
        }

        /** Properties of a CustomOperatorConfig. */
        interface ICustomOperatorConfig {

            /** CustomOperatorConfig name */
            name?: (string|null);

            /** CustomOperatorConfig config */
            config?: (google.protobuf.IStruct|null);
        }

        /** Represents a CustomOperatorConfig. */
        class CustomOperatorConfig implements ICustomOperatorConfig {

            /**
             * Constructs a new CustomOperatorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.DeploymentSpec.ICustomOperatorConfig);

            /** CustomOperatorConfig name. */
            public name: string;

            /** CustomOperatorConfig config. */
            public config?: (google.protobuf.IStruct|null);

            /**
             * Creates a new CustomOperatorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomOperatorConfig instance
             */
            public static create(properties?: kappa.DeploymentSpec.ICustomOperatorConfig): kappa.DeploymentSpec.CustomOperatorConfig;

            /**
             * Encodes the specified CustomOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.CustomOperatorConfig.verify|verify} messages.
             * @param message CustomOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.DeploymentSpec.ICustomOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.CustomOperatorConfig.verify|verify} messages.
             * @param message CustomOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.DeploymentSpec.ICustomOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomOperatorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec.CustomOperatorConfig;

            /**
             * Decodes a CustomOperatorConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec.CustomOperatorConfig;

            /**
             * Verifies a CustomOperatorConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomOperatorConfig
             */
            public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec.CustomOperatorConfig;

            /**
             * Creates a plain object from a CustomOperatorConfig message. Also converts values to other types if specified.
             * @param message CustomOperatorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.DeploymentSpec.CustomOperatorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomOperatorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SageMakerOperatorConfig. */
        interface ISageMakerOperatorConfig {

            /** SageMakerOperatorConfig region */
            region?: (string|null);

            /** SageMakerOperatorConfig instance_type */
            instance_type?: (string|null);

            /** SageMakerOperatorConfig instance_count */
            instance_count?: (number|null);

            /** SageMakerOperatorConfig api_name */
            api_name?: (string|null);

            /** SageMakerOperatorConfig num_of_gunicorn_workers_per_instance */
            num_of_gunicorn_workers_per_instance?: (number|null);

            /** SageMakerOperatorConfig timeout */
            timeout?: (number|null);

            /** SageMakerOperatorConfig data_capture_s3_prefix */
            data_capture_s3_prefix?: (string|null);

            /** SageMakerOperatorConfig data_capture_sample_percent */
            data_capture_sample_percent?: (number|null);
        }

        /** Represents a SageMakerOperatorConfig. */
        class SageMakerOperatorConfig implements ISageMakerOperatorConfig {

            /**
             * Constructs a new SageMakerOperatorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.DeploymentSpec.ISageMakerOperatorConfig);

            /** SageMakerOperatorConfig region. */
            public region: string;

            /** SageMakerOperatorConfig instance_type. */
            public instance_type: string;

            /** SageMakerOperatorConfig instance_count. */
            public instance_count: number;

            /** SageMakerOperatorConfig api_name. */
            public api_name: string;

            /** SageMakerOperatorConfig num_of_gunicorn_workers_per_instance. */
            public num_of_gunicorn_workers_per_instance: number;

            /** SageMakerOperatorConfig timeout. */
            public timeout: number;

            /** SageMakerOperatorConfig data_capture_s3_prefix. */
            public data_capture_s3_prefix: string;

            /** SageMakerOperatorConfig data_capture_sample_percent. */
            public data_capture_sample_percent: number;

            /**
             * Creates a new SageMakerOperatorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SageMakerOperatorConfig instance
             */
            public static create(properties?: kappa.DeploymentSpec.ISageMakerOperatorConfig): kappa.DeploymentSpec.SageMakerOperatorConfig;

            /**
             * Encodes the specified SageMakerOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.SageMakerOperatorConfig.verify|verify} messages.
             * @param message SageMakerOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.DeploymentSpec.ISageMakerOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SageMakerOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.SageMakerOperatorConfig.verify|verify} messages.
             * @param message SageMakerOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.DeploymentSpec.ISageMakerOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SageMakerOperatorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SageMakerOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec.SageMakerOperatorConfig;

            /**
             * Decodes a SageMakerOperatorConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SageMakerOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec.SageMakerOperatorConfig;

            /**
             * Verifies a SageMakerOperatorConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SageMakerOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SageMakerOperatorConfig
             */
            public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec.SageMakerOperatorConfig;

            /**
             * Creates a plain object from a SageMakerOperatorConfig message. Also converts values to other types if specified.
             * @param message SageMakerOperatorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.DeploymentSpec.SageMakerOperatorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SageMakerOperatorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AwsLambdaOperatorConfig. */
        interface IAwsLambdaOperatorConfig {

            /** AwsLambdaOperatorConfig region */
            region?: (string|null);

            /** AwsLambdaOperatorConfig api_name */
            api_name?: (string|null);

            /** AwsLambdaOperatorConfig memory_size */
            memory_size?: (number|null);

            /** AwsLambdaOperatorConfig timeout */
            timeout?: (number|null);
        }

        /** Represents an AwsLambdaOperatorConfig. */
        class AwsLambdaOperatorConfig implements IAwsLambdaOperatorConfig {

            /**
             * Constructs a new AwsLambdaOperatorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.DeploymentSpec.IAwsLambdaOperatorConfig);

            /** AwsLambdaOperatorConfig region. */
            public region: string;

            /** AwsLambdaOperatorConfig api_name. */
            public api_name: string;

            /** AwsLambdaOperatorConfig memory_size. */
            public memory_size: number;

            /** AwsLambdaOperatorConfig timeout. */
            public timeout: number;

            /**
             * Creates a new AwsLambdaOperatorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AwsLambdaOperatorConfig instance
             */
            public static create(properties?: kappa.DeploymentSpec.IAwsLambdaOperatorConfig): kappa.DeploymentSpec.AwsLambdaOperatorConfig;

            /**
             * Encodes the specified AwsLambdaOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AwsLambdaOperatorConfig.verify|verify} messages.
             * @param message AwsLambdaOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.DeploymentSpec.IAwsLambdaOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AwsLambdaOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AwsLambdaOperatorConfig.verify|verify} messages.
             * @param message AwsLambdaOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.DeploymentSpec.IAwsLambdaOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AwsLambdaOperatorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AwsLambdaOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec.AwsLambdaOperatorConfig;

            /**
             * Decodes an AwsLambdaOperatorConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AwsLambdaOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec.AwsLambdaOperatorConfig;

            /**
             * Verifies an AwsLambdaOperatorConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AwsLambdaOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AwsLambdaOperatorConfig
             */
            public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec.AwsLambdaOperatorConfig;

            /**
             * Creates a plain object from an AwsLambdaOperatorConfig message. Also converts values to other types if specified.
             * @param message AwsLambdaOperatorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.DeploymentSpec.AwsLambdaOperatorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AwsLambdaOperatorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureFunctionsOperatorConfig. */
        interface IAzureFunctionsOperatorConfig {

            /** AzureFunctionsOperatorConfig location */
            location?: (string|null);

            /** AzureFunctionsOperatorConfig premium_plan_sku */
            premium_plan_sku?: (string|null);

            /** AzureFunctionsOperatorConfig min_instances */
            min_instances?: (number|null);

            /** AzureFunctionsOperatorConfig max_burst */
            max_burst?: (number|null);

            /** AzureFunctionsOperatorConfig function_auth_level */
            function_auth_level?: (string|null);
        }

        /** Represents an AzureFunctionsOperatorConfig. */
        class AzureFunctionsOperatorConfig implements IAzureFunctionsOperatorConfig {

            /**
             * Constructs a new AzureFunctionsOperatorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.DeploymentSpec.IAzureFunctionsOperatorConfig);

            /** AzureFunctionsOperatorConfig location. */
            public location: string;

            /** AzureFunctionsOperatorConfig premium_plan_sku. */
            public premium_plan_sku: string;

            /** AzureFunctionsOperatorConfig min_instances. */
            public min_instances: number;

            /** AzureFunctionsOperatorConfig max_burst. */
            public max_burst: number;

            /** AzureFunctionsOperatorConfig function_auth_level. */
            public function_auth_level: string;

            /**
             * Creates a new AzureFunctionsOperatorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureFunctionsOperatorConfig instance
             */
            public static create(properties?: kappa.DeploymentSpec.IAzureFunctionsOperatorConfig): kappa.DeploymentSpec.AzureFunctionsOperatorConfig;

            /**
             * Encodes the specified AzureFunctionsOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AzureFunctionsOperatorConfig.verify|verify} messages.
             * @param message AzureFunctionsOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.DeploymentSpec.IAzureFunctionsOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureFunctionsOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AzureFunctionsOperatorConfig.verify|verify} messages.
             * @param message AzureFunctionsOperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.DeploymentSpec.IAzureFunctionsOperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureFunctionsOperatorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureFunctionsOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec.AzureFunctionsOperatorConfig;

            /**
             * Decodes an AzureFunctionsOperatorConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureFunctionsOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec.AzureFunctionsOperatorConfig;

            /**
             * Verifies an AzureFunctionsOperatorConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureFunctionsOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureFunctionsOperatorConfig
             */
            public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec.AzureFunctionsOperatorConfig;

            /**
             * Creates a plain object from an AzureFunctionsOperatorConfig message. Also converts values to other types if specified.
             * @param message AzureFunctionsOperatorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.DeploymentSpec.AzureFunctionsOperatorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureFunctionsOperatorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AwsEc2OperatorConfig. */
        interface IAwsEc2OperatorConfig {

            /** AwsEc2OperatorConfig region */
            region?: (string|null);

            /** AwsEc2OperatorConfig instance_type */
            instance_type?: (string|null);

            /** AwsEc2OperatorConfig ami_id */
            ami_id?: (string|null);

            /** AwsEc2OperatorConfig autoscale_min_size */
            autoscale_min_size?: (number|null);

            /** AwsEc2OperatorConfig autoscale_desired_capacity */
            autoscale_desired_capacity?: (number|null);

            /** AwsEc2OperatorConfig autoscale_max_size */
            autoscale_max_size?: (number|null);
        }

        /** Represents an AwsEc2OperatorConfig. */
        class AwsEc2OperatorConfig implements IAwsEc2OperatorConfig {

            /**
             * Constructs a new AwsEc2OperatorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.DeploymentSpec.IAwsEc2OperatorConfig);

            /** AwsEc2OperatorConfig region. */
            public region: string;

            /** AwsEc2OperatorConfig instance_type. */
            public instance_type: string;

            /** AwsEc2OperatorConfig ami_id. */
            public ami_id: string;

            /** AwsEc2OperatorConfig autoscale_min_size. */
            public autoscale_min_size: number;

            /** AwsEc2OperatorConfig autoscale_desired_capacity. */
            public autoscale_desired_capacity: number;

            /** AwsEc2OperatorConfig autoscale_max_size. */
            public autoscale_max_size: number;

            /**
             * Creates a new AwsEc2OperatorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AwsEc2OperatorConfig instance
             */
            public static create(properties?: kappa.DeploymentSpec.IAwsEc2OperatorConfig): kappa.DeploymentSpec.AwsEc2OperatorConfig;

            /**
             * Encodes the specified AwsEc2OperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AwsEc2OperatorConfig.verify|verify} messages.
             * @param message AwsEc2OperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.DeploymentSpec.IAwsEc2OperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AwsEc2OperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AwsEc2OperatorConfig.verify|verify} messages.
             * @param message AwsEc2OperatorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.DeploymentSpec.IAwsEc2OperatorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AwsEc2OperatorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AwsEc2OperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentSpec.AwsEc2OperatorConfig;

            /**
             * Decodes an AwsEc2OperatorConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AwsEc2OperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentSpec.AwsEc2OperatorConfig;

            /**
             * Verifies an AwsEc2OperatorConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AwsEc2OperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AwsEc2OperatorConfig
             */
            public static fromObject(object: { [k: string]: any }): kappa.DeploymentSpec.AwsEc2OperatorConfig;

            /**
             * Creates a plain object from an AwsEc2OperatorConfig message. Also converts values to other types if specified.
             * @param message AwsEc2OperatorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.DeploymentSpec.AwsEc2OperatorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AwsEc2OperatorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a DeploymentState. */
    interface IDeploymentState {

        /** DeploymentState state */
        state?: (kappa.DeploymentState.State|null);

        /** DeploymentState error_message */
        error_message?: (string|null);

        /** DeploymentState info_json */
        info_json?: (string|null);

        /** DeploymentState timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a DeploymentState. */
    class DeploymentState implements IDeploymentState {

        /**
         * Constructs a new DeploymentState.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeploymentState);

        /** DeploymentState state. */
        public state: kappa.DeploymentState.State;

        /** DeploymentState error_message. */
        public error_message: string;

        /** DeploymentState info_json. */
        public info_json: string;

        /** DeploymentState timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new DeploymentState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeploymentState instance
         */
        public static create(properties?: kappa.IDeploymentState): kappa.DeploymentState;

        /**
         * Encodes the specified DeploymentState message. Does not implicitly {@link kappa.DeploymentState.verify|verify} messages.
         * @param message DeploymentState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeploymentState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeploymentState message, length delimited. Does not implicitly {@link kappa.DeploymentState.verify|verify} messages.
         * @param message DeploymentState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeploymentState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeploymentState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeploymentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentState;

        /**
         * Decodes a DeploymentState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeploymentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentState;

        /**
         * Verifies a DeploymentState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeploymentState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeploymentState
         */
        public static fromObject(object: { [k: string]: any }): kappa.DeploymentState;

        /**
         * Creates a plain object from a DeploymentState message. Also converts values to other types if specified.
         * @param message DeploymentState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DeploymentState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeploymentState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DeploymentState {

        /** State enum. */
        enum State {
            PENDING = 0,
            RUNNING = 1,
            SUCCEEDED = 2,
            FAILED = 3,
            UNKNOWN = 4,
            COMPLETED = 5,
            CRASH_LOOP_BACK_OFF = 6,
            ERROR = 7,
            INACTIVATED = 8
        }
    }

    /** Properties of a Deployment. */
    interface IDeployment {

        /** Deployment namespace */
        namespace?: (string|null);

        /** Deployment name */
        name?: (string|null);

        /** Deployment spec */
        spec?: (kappa.IDeploymentSpec|null);

        /** Deployment state */
        state?: (kappa.IDeploymentState|null);

        /** Deployment annotations */
        annotations?: ({ [k: string]: string }|null);

        /** Deployment labels */
        labels?: ({ [k: string]: string }|null);

        /** Deployment created_at */
        created_at?: (google.protobuf.ITimestamp|null);

        /** Deployment last_updated_at */
        last_updated_at?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Deployment. */
    class Deployment implements IDeployment {

        /**
         * Constructs a new Deployment.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeployment);

        /** Deployment namespace. */
        public namespace: string;

        /** Deployment name. */
        public name: string;

        /** Deployment spec. */
        public spec?: (kappa.IDeploymentSpec|null);

        /** Deployment state. */
        public state?: (kappa.IDeploymentState|null);

        /** Deployment annotations. */
        public annotations: { [k: string]: string };

        /** Deployment labels. */
        public labels: { [k: string]: string };

        /** Deployment created_at. */
        public created_at?: (google.protobuf.ITimestamp|null);

        /** Deployment last_updated_at. */
        public last_updated_at?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Deployment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Deployment instance
         */
        public static create(properties?: kappa.IDeployment): kappa.Deployment;

        /**
         * Encodes the specified Deployment message. Does not implicitly {@link kappa.Deployment.verify|verify} messages.
         * @param message Deployment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Deployment message, length delimited. Does not implicitly {@link kappa.Deployment.verify|verify} messages.
         * @param message Deployment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Deployment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Deployment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.Deployment;

        /**
         * Decodes a Deployment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Deployment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.Deployment;

        /**
         * Verifies a Deployment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Deployment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Deployment
         */
        public static fromObject(object: { [k: string]: any }): kappa.Deployment;

        /**
         * Creates a plain object from a Deployment message. Also converts values to other types if specified.
         * @param message Deployment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.Deployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Deployment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeploymentStatus. */
    interface IDeploymentStatus {

        /** DeploymentStatus state */
        state?: (kappa.IDeploymentState|null);
    }

    /** Represents a DeploymentStatus. */
    class DeploymentStatus implements IDeploymentStatus {

        /**
         * Constructs a new DeploymentStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeploymentStatus);

        /** DeploymentStatus state. */
        public state?: (kappa.IDeploymentState|null);

        /**
         * Creates a new DeploymentStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeploymentStatus instance
         */
        public static create(properties?: kappa.IDeploymentStatus): kappa.DeploymentStatus;

        /**
         * Encodes the specified DeploymentStatus message. Does not implicitly {@link kappa.DeploymentStatus.verify|verify} messages.
         * @param message DeploymentStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeploymentStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeploymentStatus message, length delimited. Does not implicitly {@link kappa.DeploymentStatus.verify|verify} messages.
         * @param message DeploymentStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeploymentStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeploymentStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeploymentStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeploymentStatus;

        /**
         * Decodes a DeploymentStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeploymentStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeploymentStatus;

        /**
         * Verifies a DeploymentStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeploymentStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeploymentStatus
         */
        public static fromObject(object: { [k: string]: any }): kappa.DeploymentStatus;

        /**
         * Creates a plain object from a DeploymentStatus message. Also converts values to other types if specified.
         * @param message DeploymentStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DeploymentStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeploymentStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApplyDeploymentRequest. */
    interface IApplyDeploymentRequest {

        /** ApplyDeploymentRequest deployment */
        deployment?: (kappa.IDeployment|null);
    }

    /** Represents an ApplyDeploymentRequest. */
    class ApplyDeploymentRequest implements IApplyDeploymentRequest {

        /**
         * Constructs a new ApplyDeploymentRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IApplyDeploymentRequest);

        /** ApplyDeploymentRequest deployment. */
        public deployment?: (kappa.IDeployment|null);

        /**
         * Creates a new ApplyDeploymentRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDeploymentRequest instance
         */
        public static create(properties?: kappa.IApplyDeploymentRequest): kappa.ApplyDeploymentRequest;

        /**
         * Encodes the specified ApplyDeploymentRequest message. Does not implicitly {@link kappa.ApplyDeploymentRequest.verify|verify} messages.
         * @param message ApplyDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IApplyDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDeploymentRequest message, length delimited. Does not implicitly {@link kappa.ApplyDeploymentRequest.verify|verify} messages.
         * @param message ApplyDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IApplyDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDeploymentRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ApplyDeploymentRequest;

        /**
         * Decodes an ApplyDeploymentRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ApplyDeploymentRequest;

        /**
         * Verifies an ApplyDeploymentRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDeploymentRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.ApplyDeploymentRequest;

        /**
         * Creates a plain object from an ApplyDeploymentRequest message. Also converts values to other types if specified.
         * @param message ApplyDeploymentRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ApplyDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDeploymentRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApplyDeploymentResponse. */
    interface IApplyDeploymentResponse {

        /** ApplyDeploymentResponse status */
        status?: (kappa.IStatus|null);

        /** ApplyDeploymentResponse deployment */
        deployment?: (kappa.IDeployment|null);
    }

    /** Represents an ApplyDeploymentResponse. */
    class ApplyDeploymentResponse implements IApplyDeploymentResponse {

        /**
         * Constructs a new ApplyDeploymentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IApplyDeploymentResponse);

        /** ApplyDeploymentResponse status. */
        public status?: (kappa.IStatus|null);

        /** ApplyDeploymentResponse deployment. */
        public deployment?: (kappa.IDeployment|null);

        /**
         * Creates a new ApplyDeploymentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDeploymentResponse instance
         */
        public static create(properties?: kappa.IApplyDeploymentResponse): kappa.ApplyDeploymentResponse;

        /**
         * Encodes the specified ApplyDeploymentResponse message. Does not implicitly {@link kappa.ApplyDeploymentResponse.verify|verify} messages.
         * @param message ApplyDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IApplyDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDeploymentResponse message, length delimited. Does not implicitly {@link kappa.ApplyDeploymentResponse.verify|verify} messages.
         * @param message ApplyDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IApplyDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDeploymentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ApplyDeploymentResponse;

        /**
         * Decodes an ApplyDeploymentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ApplyDeploymentResponse;

        /**
         * Verifies an ApplyDeploymentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDeploymentResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.ApplyDeploymentResponse;

        /**
         * Creates a plain object from an ApplyDeploymentResponse message. Also converts values to other types if specified.
         * @param message ApplyDeploymentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ApplyDeploymentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDeploymentResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteDeploymentRequest. */
    interface IDeleteDeploymentRequest {

        /** DeleteDeploymentRequest deployment_name */
        deployment_name?: (string|null);

        /** DeleteDeploymentRequest namespace */
        namespace?: (string|null);

        /** DeleteDeploymentRequest force_delete */
        force_delete?: (boolean|null);
    }

    /** Represents a DeleteDeploymentRequest. */
    class DeleteDeploymentRequest implements IDeleteDeploymentRequest {

        /**
         * Constructs a new DeleteDeploymentRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeleteDeploymentRequest);

        /** DeleteDeploymentRequest deployment_name. */
        public deployment_name: string;

        /** DeleteDeploymentRequest namespace. */
        public namespace: string;

        /** DeleteDeploymentRequest force_delete. */
        public force_delete: boolean;

        /**
         * Creates a new DeleteDeploymentRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteDeploymentRequest instance
         */
        public static create(properties?: kappa.IDeleteDeploymentRequest): kappa.DeleteDeploymentRequest;

        /**
         * Encodes the specified DeleteDeploymentRequest message. Does not implicitly {@link kappa.DeleteDeploymentRequest.verify|verify} messages.
         * @param message DeleteDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeleteDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteDeploymentRequest message, length delimited. Does not implicitly {@link kappa.DeleteDeploymentRequest.verify|verify} messages.
         * @param message DeleteDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeleteDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteDeploymentRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeleteDeploymentRequest;

        /**
         * Decodes a DeleteDeploymentRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeleteDeploymentRequest;

        /**
         * Verifies a DeleteDeploymentRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteDeploymentRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.DeleteDeploymentRequest;

        /**
         * Creates a plain object from a DeleteDeploymentRequest message. Also converts values to other types if specified.
         * @param message DeleteDeploymentRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DeleteDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteDeploymentRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteDeploymentResponse. */
    interface IDeleteDeploymentResponse {

        /** DeleteDeploymentResponse status */
        status?: (kappa.IStatus|null);
    }

    /** Represents a DeleteDeploymentResponse. */
    class DeleteDeploymentResponse implements IDeleteDeploymentResponse {

        /**
         * Constructs a new DeleteDeploymentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDeleteDeploymentResponse);

        /** DeleteDeploymentResponse status. */
        public status?: (kappa.IStatus|null);

        /**
         * Creates a new DeleteDeploymentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteDeploymentResponse instance
         */
        public static create(properties?: kappa.IDeleteDeploymentResponse): kappa.DeleteDeploymentResponse;

        /**
         * Encodes the specified DeleteDeploymentResponse message. Does not implicitly {@link kappa.DeleteDeploymentResponse.verify|verify} messages.
         * @param message DeleteDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDeleteDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteDeploymentResponse message, length delimited. Does not implicitly {@link kappa.DeleteDeploymentResponse.verify|verify} messages.
         * @param message DeleteDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDeleteDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteDeploymentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DeleteDeploymentResponse;

        /**
         * Decodes a DeleteDeploymentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DeleteDeploymentResponse;

        /**
         * Verifies a DeleteDeploymentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteDeploymentResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.DeleteDeploymentResponse;

        /**
         * Creates a plain object from a DeleteDeploymentResponse message. Also converts values to other types if specified.
         * @param message DeleteDeploymentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DeleteDeploymentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteDeploymentResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetDeploymentRequest. */
    interface IGetDeploymentRequest {

        /** GetDeploymentRequest deployment_name */
        deployment_name?: (string|null);

        /** GetDeploymentRequest namespace */
        namespace?: (string|null);
    }

    /** Represents a GetDeploymentRequest. */
    class GetDeploymentRequest implements IGetDeploymentRequest {

        /**
         * Constructs a new GetDeploymentRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IGetDeploymentRequest);

        /** GetDeploymentRequest deployment_name. */
        public deployment_name: string;

        /** GetDeploymentRequest namespace. */
        public namespace: string;

        /**
         * Creates a new GetDeploymentRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDeploymentRequest instance
         */
        public static create(properties?: kappa.IGetDeploymentRequest): kappa.GetDeploymentRequest;

        /**
         * Encodes the specified GetDeploymentRequest message. Does not implicitly {@link kappa.GetDeploymentRequest.verify|verify} messages.
         * @param message GetDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDeploymentRequest message, length delimited. Does not implicitly {@link kappa.GetDeploymentRequest.verify|verify} messages.
         * @param message GetDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDeploymentRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.GetDeploymentRequest;

        /**
         * Decodes a GetDeploymentRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.GetDeploymentRequest;

        /**
         * Verifies a GetDeploymentRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDeploymentRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.GetDeploymentRequest;

        /**
         * Creates a plain object from a GetDeploymentRequest message. Also converts values to other types if specified.
         * @param message GetDeploymentRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.GetDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDeploymentRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetDeploymentResponse. */
    interface IGetDeploymentResponse {

        /** GetDeploymentResponse status */
        status?: (kappa.IStatus|null);

        /** GetDeploymentResponse deployment */
        deployment?: (kappa.IDeployment|null);
    }

    /** Represents a GetDeploymentResponse. */
    class GetDeploymentResponse implements IGetDeploymentResponse {

        /**
         * Constructs a new GetDeploymentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IGetDeploymentResponse);

        /** GetDeploymentResponse status. */
        public status?: (kappa.IStatus|null);

        /** GetDeploymentResponse deployment. */
        public deployment?: (kappa.IDeployment|null);

        /**
         * Creates a new GetDeploymentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDeploymentResponse instance
         */
        public static create(properties?: kappa.IGetDeploymentResponse): kappa.GetDeploymentResponse;

        /**
         * Encodes the specified GetDeploymentResponse message. Does not implicitly {@link kappa.GetDeploymentResponse.verify|verify} messages.
         * @param message GetDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IGetDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDeploymentResponse message, length delimited. Does not implicitly {@link kappa.GetDeploymentResponse.verify|verify} messages.
         * @param message GetDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IGetDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDeploymentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.GetDeploymentResponse;

        /**
         * Decodes a GetDeploymentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.GetDeploymentResponse;

        /**
         * Verifies a GetDeploymentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDeploymentResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.GetDeploymentResponse;

        /**
         * Creates a plain object from a GetDeploymentResponse message. Also converts values to other types if specified.
         * @param message GetDeploymentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.GetDeploymentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDeploymentResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DescribeDeploymentRequest. */
    interface IDescribeDeploymentRequest {

        /** DescribeDeploymentRequest deployment_name */
        deployment_name?: (string|null);

        /** DescribeDeploymentRequest namespace */
        namespace?: (string|null);
    }

    /** Represents a DescribeDeploymentRequest. */
    class DescribeDeploymentRequest implements IDescribeDeploymentRequest {

        /**
         * Constructs a new DescribeDeploymentRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDescribeDeploymentRequest);

        /** DescribeDeploymentRequest deployment_name. */
        public deployment_name: string;

        /** DescribeDeploymentRequest namespace. */
        public namespace: string;

        /**
         * Creates a new DescribeDeploymentRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DescribeDeploymentRequest instance
         */
        public static create(properties?: kappa.IDescribeDeploymentRequest): kappa.DescribeDeploymentRequest;

        /**
         * Encodes the specified DescribeDeploymentRequest message. Does not implicitly {@link kappa.DescribeDeploymentRequest.verify|verify} messages.
         * @param message DescribeDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDescribeDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DescribeDeploymentRequest message, length delimited. Does not implicitly {@link kappa.DescribeDeploymentRequest.verify|verify} messages.
         * @param message DescribeDeploymentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDescribeDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DescribeDeploymentRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DescribeDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DescribeDeploymentRequest;

        /**
         * Decodes a DescribeDeploymentRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DescribeDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DescribeDeploymentRequest;

        /**
         * Verifies a DescribeDeploymentRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DescribeDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DescribeDeploymentRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.DescribeDeploymentRequest;

        /**
         * Creates a plain object from a DescribeDeploymentRequest message. Also converts values to other types if specified.
         * @param message DescribeDeploymentRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DescribeDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DescribeDeploymentRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DescribeDeploymentResponse. */
    interface IDescribeDeploymentResponse {

        /** DescribeDeploymentResponse status */
        status?: (kappa.IStatus|null);

        /** DescribeDeploymentResponse state */
        state?: (kappa.IDeploymentState|null);
    }

    /** Represents a DescribeDeploymentResponse. */
    class DescribeDeploymentResponse implements IDescribeDeploymentResponse {

        /**
         * Constructs a new DescribeDeploymentResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDescribeDeploymentResponse);

        /** DescribeDeploymentResponse status. */
        public status?: (kappa.IStatus|null);

        /** DescribeDeploymentResponse state. */
        public state?: (kappa.IDeploymentState|null);

        /**
         * Creates a new DescribeDeploymentResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DescribeDeploymentResponse instance
         */
        public static create(properties?: kappa.IDescribeDeploymentResponse): kappa.DescribeDeploymentResponse;

        /**
         * Encodes the specified DescribeDeploymentResponse message. Does not implicitly {@link kappa.DescribeDeploymentResponse.verify|verify} messages.
         * @param message DescribeDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDescribeDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DescribeDeploymentResponse message, length delimited. Does not implicitly {@link kappa.DescribeDeploymentResponse.verify|verify} messages.
         * @param message DescribeDeploymentResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDescribeDeploymentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DescribeDeploymentResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DescribeDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DescribeDeploymentResponse;

        /**
         * Decodes a DescribeDeploymentResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DescribeDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DescribeDeploymentResponse;

        /**
         * Verifies a DescribeDeploymentResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DescribeDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DescribeDeploymentResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.DescribeDeploymentResponse;

        /**
         * Creates a plain object from a DescribeDeploymentResponse message. Also converts values to other types if specified.
         * @param message DescribeDeploymentResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DescribeDeploymentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DescribeDeploymentResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListDeploymentsRequest. */
    interface IListDeploymentsRequest {

        /** ListDeploymentsRequest namespace */
        namespace?: (string|null);

        /** ListDeploymentsRequest offset */
        offset?: (number|null);

        /** ListDeploymentsRequest limit */
        limit?: (number|null);

        /** ListDeploymentsRequest operator */
        operator?: (kappa.DeploymentSpec.DeploymentOperator|null);

        /** ListDeploymentsRequest order_by */
        order_by?: (kappa.ListDeploymentsRequest.SORTABLE_COLUMN|null);

        /** ListDeploymentsRequest ascending_order */
        ascending_order?: (boolean|null);

        /** ListDeploymentsRequest labels_query */
        labels_query?: (string|null);

        /** ListDeploymentsRequest label_selectors */
        label_selectors?: (kappa.ILabelSelectors|null);
    }

    /** Represents a ListDeploymentsRequest. */
    class ListDeploymentsRequest implements IListDeploymentsRequest {

        /**
         * Constructs a new ListDeploymentsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IListDeploymentsRequest);

        /** ListDeploymentsRequest namespace. */
        public namespace: string;

        /** ListDeploymentsRequest offset. */
        public offset: number;

        /** ListDeploymentsRequest limit. */
        public limit: number;

        /** ListDeploymentsRequest operator. */
        public operator: kappa.DeploymentSpec.DeploymentOperator;

        /** ListDeploymentsRequest order_by. */
        public order_by: kappa.ListDeploymentsRequest.SORTABLE_COLUMN;

        /** ListDeploymentsRequest ascending_order. */
        public ascending_order: boolean;

        /** ListDeploymentsRequest labels_query. */
        public labels_query: string;

        /** ListDeploymentsRequest label_selectors. */
        public label_selectors?: (kappa.ILabelSelectors|null);

        /**
         * Creates a new ListDeploymentsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListDeploymentsRequest instance
         */
        public static create(properties?: kappa.IListDeploymentsRequest): kappa.ListDeploymentsRequest;

        /**
         * Encodes the specified ListDeploymentsRequest message. Does not implicitly {@link kappa.ListDeploymentsRequest.verify|verify} messages.
         * @param message ListDeploymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListDeploymentsRequest message, length delimited. Does not implicitly {@link kappa.ListDeploymentsRequest.verify|verify} messages.
         * @param message ListDeploymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListDeploymentsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListDeploymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ListDeploymentsRequest;

        /**
         * Decodes a ListDeploymentsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListDeploymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ListDeploymentsRequest;

        /**
         * Verifies a ListDeploymentsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListDeploymentsRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.ListDeploymentsRequest;

        /**
         * Creates a plain object from a ListDeploymentsRequest message. Also converts values to other types if specified.
         * @param message ListDeploymentsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ListDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListDeploymentsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ListDeploymentsRequest {

        /** SORTABLE_COLUMN enum. */
        enum SORTABLE_COLUMN {
            created_at = 0,
            name = 1
        }
    }

    /** Properties of a ListDeploymentsResponse. */
    interface IListDeploymentsResponse {

        /** ListDeploymentsResponse status */
        status?: (kappa.IStatus|null);

        /** ListDeploymentsResponse deployments */
        deployments?: (kappa.IDeployment[]|null);
    }

    /** Represents a ListDeploymentsResponse. */
    class ListDeploymentsResponse implements IListDeploymentsResponse {

        /**
         * Constructs a new ListDeploymentsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IListDeploymentsResponse);

        /** ListDeploymentsResponse status. */
        public status?: (kappa.IStatus|null);

        /** ListDeploymentsResponse deployments. */
        public deployments: kappa.IDeployment[];

        /**
         * Creates a new ListDeploymentsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListDeploymentsResponse instance
         */
        public static create(properties?: kappa.IListDeploymentsResponse): kappa.ListDeploymentsResponse;

        /**
         * Encodes the specified ListDeploymentsResponse message. Does not implicitly {@link kappa.ListDeploymentsResponse.verify|verify} messages.
         * @param message ListDeploymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListDeploymentsResponse message, length delimited. Does not implicitly {@link kappa.ListDeploymentsResponse.verify|verify} messages.
         * @param message ListDeploymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListDeploymentsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListDeploymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ListDeploymentsResponse;

        /**
         * Decodes a ListDeploymentsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListDeploymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ListDeploymentsResponse;

        /**
         * Verifies a ListDeploymentsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListDeploymentsResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.ListDeploymentsResponse;

        /**
         * Creates a plain object from a ListDeploymentsResponse message. Also converts values to other types if specified.
         * @param message ListDeploymentsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ListDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListDeploymentsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Status. */
    interface IStatus {

        /** Status status_code */
        status_code?: (kappa.Status.Code|null);

        /** Status error_message */
        error_message?: (string|null);
    }

    /** Represents a Status. */
    class Status implements IStatus {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IStatus);

        /** Status status_code. */
        public status_code: kappa.Status.Code;

        /** Status error_message. */
        public error_message: string;

        /**
         * Creates a new Status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Status instance
         */
        public static create(properties?: kappa.IStatus): kappa.Status;

        /**
         * Encodes the specified Status message. Does not implicitly {@link kappa.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link kappa.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.Status;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.Status;

        /**
         * Verifies a Status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Status
         */
        public static fromObject(object: { [k: string]: any }): kappa.Status;

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @param message Status
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Status to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Status {

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15,
            DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_ = 20
        }
    }

    /** Properties of a LabelSelectors. */
    interface ILabelSelectors {

        /** LabelSelectors match_labels */
        match_labels?: ({ [k: string]: string }|null);

        /** LabelSelectors match_expressions */
        match_expressions?: (kappa.LabelSelectors.ILabelSelectorExpression[]|null);
    }

    /** Represents a LabelSelectors. */
    class LabelSelectors implements ILabelSelectors {

        /**
         * Constructs a new LabelSelectors.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.ILabelSelectors);

        /** LabelSelectors match_labels. */
        public match_labels: { [k: string]: string };

        /** LabelSelectors match_expressions. */
        public match_expressions: kappa.LabelSelectors.ILabelSelectorExpression[];

        /**
         * Creates a new LabelSelectors instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelSelectors instance
         */
        public static create(properties?: kappa.ILabelSelectors): kappa.LabelSelectors;

        /**
         * Encodes the specified LabelSelectors message. Does not implicitly {@link kappa.LabelSelectors.verify|verify} messages.
         * @param message LabelSelectors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.ILabelSelectors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelSelectors message, length delimited. Does not implicitly {@link kappa.LabelSelectors.verify|verify} messages.
         * @param message LabelSelectors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.ILabelSelectors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelSelectors message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelSelectors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.LabelSelectors;

        /**
         * Decodes a LabelSelectors message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelSelectors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.LabelSelectors;

        /**
         * Verifies a LabelSelectors message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelSelectors message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelSelectors
         */
        public static fromObject(object: { [k: string]: any }): kappa.LabelSelectors;

        /**
         * Creates a plain object from a LabelSelectors message. Also converts values to other types if specified.
         * @param message LabelSelectors
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.LabelSelectors, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelSelectors to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace LabelSelectors {

        /** Properties of a LabelSelectorExpression. */
        interface ILabelSelectorExpression {

            /** LabelSelectorExpression operator */
            operator?: (kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE|null);

            /** LabelSelectorExpression key */
            key?: (string|null);

            /** LabelSelectorExpression values */
            values?: (string[]|null);
        }

        /** Represents a LabelSelectorExpression. */
        class LabelSelectorExpression implements ILabelSelectorExpression {

            /**
             * Constructs a new LabelSelectorExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.LabelSelectors.ILabelSelectorExpression);

            /** LabelSelectorExpression operator. */
            public operator: kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE;

            /** LabelSelectorExpression key. */
            public key: string;

            /** LabelSelectorExpression values. */
            public values: string[];

            /**
             * Creates a new LabelSelectorExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelSelectorExpression instance
             */
            public static create(properties?: kappa.LabelSelectors.ILabelSelectorExpression): kappa.LabelSelectors.LabelSelectorExpression;

            /**
             * Encodes the specified LabelSelectorExpression message. Does not implicitly {@link kappa.LabelSelectors.LabelSelectorExpression.verify|verify} messages.
             * @param message LabelSelectorExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.LabelSelectors.ILabelSelectorExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelSelectorExpression message, length delimited. Does not implicitly {@link kappa.LabelSelectors.LabelSelectorExpression.verify|verify} messages.
             * @param message LabelSelectorExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.LabelSelectors.ILabelSelectorExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelSelectorExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LabelSelectorExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.LabelSelectors.LabelSelectorExpression;

            /**
             * Decodes a LabelSelectorExpression message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LabelSelectorExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.LabelSelectors.LabelSelectorExpression;

            /**
             * Verifies a LabelSelectorExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelSelectorExpression message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelSelectorExpression
             */
            public static fromObject(object: { [k: string]: any }): kappa.LabelSelectors.LabelSelectorExpression;

            /**
             * Creates a plain object from a LabelSelectorExpression message. Also converts values to other types if specified.
             * @param message LabelSelectorExpression
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.LabelSelectors.LabelSelectorExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelSelectorExpression to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace LabelSelectorExpression {

            /** OPERATOR_TYPE enum. */
            enum OPERATOR_TYPE {
                In = 0,
                NotIn = 1,
                Exists = 2,
                DoesNotExist = 3
            }
        }
    }

    /** Represents a Gamma */
    class Gamma extends $protobuf.rpc.Service {

        /**
         * Constructs a new Gamma service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Gamma service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gamma;

        /**
         * Calls HealthCheck.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and HealthCheckResponse
         */
        public healthCheck(request: google.protobuf.IEmpty, callback: kappa.Gamma.HealthCheckCallback): void;

        /**
         * Calls HealthCheck.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public healthCheck(request: google.protobuf.IEmpty): Promise<kappa.HealthCheckResponse>;

        /**
         * Calls GetGammaServiceVersion.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGammaServiceVersionResponse
         */
        public getGammaServiceVersion(request: google.protobuf.IEmpty, callback: kappa.Gamma.GetGammaServiceVersionCallback): void;

        /**
         * Calls GetGammaServiceVersion.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getGammaServiceVersion(request: google.protobuf.IEmpty): Promise<kappa.GetGammaServiceVersionResponse>;

        /**
         * Calls ApplyDeployment.
         * @param request ApplyDeploymentRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ApplyDeploymentResponse
         */
        public applyDeployment(request: kappa.IApplyDeploymentRequest, callback: kappa.Gamma.ApplyDeploymentCallback): void;

        /**
         * Calls ApplyDeployment.
         * @param request ApplyDeploymentRequest message or plain object
         * @returns Promise
         */
        public applyDeployment(request: kappa.IApplyDeploymentRequest): Promise<kappa.ApplyDeploymentResponse>;

        /**
         * Calls DeleteDeployment.
         * @param request DeleteDeploymentRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteDeploymentResponse
         */
        public deleteDeployment(request: kappa.IDeleteDeploymentRequest, callback: kappa.Gamma.DeleteDeploymentCallback): void;

        /**
         * Calls DeleteDeployment.
         * @param request DeleteDeploymentRequest message or plain object
         * @returns Promise
         */
        public deleteDeployment(request: kappa.IDeleteDeploymentRequest): Promise<kappa.DeleteDeploymentResponse>;

        /**
         * Calls GetDeployment.
         * @param request GetDeploymentRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetDeploymentResponse
         */
        public getDeployment(request: kappa.IGetDeploymentRequest, callback: kappa.Gamma.GetDeploymentCallback): void;

        /**
         * Calls GetDeployment.
         * @param request GetDeploymentRequest message or plain object
         * @returns Promise
         */
        public getDeployment(request: kappa.IGetDeploymentRequest): Promise<kappa.GetDeploymentResponse>;

        /**
         * Calls DescribeDeployment.
         * @param request DescribeDeploymentRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DescribeDeploymentResponse
         */
        public describeDeployment(request: kappa.IDescribeDeploymentRequest, callback: kappa.Gamma.DescribeDeploymentCallback): void;

        /**
         * Calls DescribeDeployment.
         * @param request DescribeDeploymentRequest message or plain object
         * @returns Promise
         */
        public describeDeployment(request: kappa.IDescribeDeploymentRequest): Promise<kappa.DescribeDeploymentResponse>;

        /**
         * Calls ListDeployments.
         * @param request ListDeploymentsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListDeploymentsResponse
         */
        public listDeployments(request: kappa.IListDeploymentsRequest, callback: kappa.Gamma.ListDeploymentsCallback): void;

        /**
         * Calls ListDeployments.
         * @param request ListDeploymentsRequest message or plain object
         * @returns Promise
         */
        public listDeployments(request: kappa.IListDeploymentsRequest): Promise<kappa.ListDeploymentsResponse>;

        /**
         * Calls AddBento.
         * @param request AddBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddBentoResponse
         */
        public addBento(request: kappa.IAddBentoRequest, callback: kappa.Gamma.AddBentoCallback): void;

        /**
         * Calls AddBento.
         * @param request AddBentoRequest message or plain object
         * @returns Promise
         */
        public addBento(request: kappa.IAddBentoRequest): Promise<kappa.AddBentoResponse>;

        /**
         * Calls UpdateBento.
         * @param request UpdateBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateBentoResponse
         */
        public updateBento(request: kappa.IUpdateBentoRequest, callback: kappa.Gamma.UpdateBentoCallback): void;

        /**
         * Calls UpdateBento.
         * @param request UpdateBentoRequest message or plain object
         * @returns Promise
         */
        public updateBento(request: kappa.IUpdateBentoRequest): Promise<kappa.UpdateBentoResponse>;

        /**
         * Calls GetBento.
         * @param request GetBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetBentoResponse
         */
        public getBento(request: kappa.IGetBentoRequest, callback: kappa.Gamma.GetBentoCallback): void;

        /**
         * Calls GetBento.
         * @param request GetBentoRequest message or plain object
         * @returns Promise
         */
        public getBento(request: kappa.IGetBentoRequest): Promise<kappa.GetBentoResponse>;

        /**
         * Calls DangerouslyDeleteBento.
         * @param request DangerouslyDeleteBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DangerouslyDeleteBentoResponse
         */
        public dangerouslyDeleteBento(request: kappa.IDangerouslyDeleteBentoRequest, callback: kappa.Gamma.DangerouslyDeleteBentoCallback): void;

        /**
         * Calls DangerouslyDeleteBento.
         * @param request DangerouslyDeleteBentoRequest message or plain object
         * @returns Promise
         */
        public dangerouslyDeleteBento(request: kappa.IDangerouslyDeleteBentoRequest): Promise<kappa.DangerouslyDeleteBentoResponse>;

        /**
         * Calls ListBento.
         * @param request ListBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListBentoResponse
         */
        public listBento(request: kappa.IListBentoRequest, callback: kappa.Gamma.ListBentoCallback): void;

        /**
         * Calls ListBento.
         * @param request ListBentoRequest message or plain object
         * @returns Promise
         */
        public listBento(request: kappa.IListBentoRequest): Promise<kappa.ListBentoResponse>;

        /**
         * Calls ContainerizeBento.
         * @param request ContainerizeBentoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ContainerizeBentoResponse
         */
        public containerizeBento(request: kappa.IContainerizeBentoRequest, callback: kappa.Gamma.ContainerizeBentoCallback): void;

        /**
         * Calls ContainerizeBento.
         * @param request ContainerizeBentoRequest message or plain object
         * @returns Promise
         */
        public containerizeBento(request: kappa.IContainerizeBentoRequest): Promise<kappa.ContainerizeBentoResponse>;
    }

    namespace Gamma {

        /**
         * Callback as used by {@link kappa.Gamma#healthCheck}.
         * @param error Error, if any
         * @param [response] HealthCheckResponse
         */
        type HealthCheckCallback = (error: (Error|null), response?: kappa.HealthCheckResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#getGammaServiceVersion}.
         * @param error Error, if any
         * @param [response] GetGammaServiceVersionResponse
         */
        type GetGammaServiceVersionCallback = (error: (Error|null), response?: kappa.GetGammaServiceVersionResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#applyDeployment}.
         * @param error Error, if any
         * @param [response] ApplyDeploymentResponse
         */
        type ApplyDeploymentCallback = (error: (Error|null), response?: kappa.ApplyDeploymentResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#deleteDeployment}.
         * @param error Error, if any
         * @param [response] DeleteDeploymentResponse
         */
        type DeleteDeploymentCallback = (error: (Error|null), response?: kappa.DeleteDeploymentResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#getDeployment}.
         * @param error Error, if any
         * @param [response] GetDeploymentResponse
         */
        type GetDeploymentCallback = (error: (Error|null), response?: kappa.GetDeploymentResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#describeDeployment}.
         * @param error Error, if any
         * @param [response] DescribeDeploymentResponse
         */
        type DescribeDeploymentCallback = (error: (Error|null), response?: kappa.DescribeDeploymentResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#listDeployments}.
         * @param error Error, if any
         * @param [response] ListDeploymentsResponse
         */
        type ListDeploymentsCallback = (error: (Error|null), response?: kappa.ListDeploymentsResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#addBento}.
         * @param error Error, if any
         * @param [response] AddBentoResponse
         */
        type AddBentoCallback = (error: (Error|null), response?: kappa.AddBentoResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#updateBento}.
         * @param error Error, if any
         * @param [response] UpdateBentoResponse
         */
        type UpdateBentoCallback = (error: (Error|null), response?: kappa.UpdateBentoResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#getBento}.
         * @param error Error, if any
         * @param [response] GetBentoResponse
         */
        type GetBentoCallback = (error: (Error|null), response?: kappa.GetBentoResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#dangerouslyDeleteBento}.
         * @param error Error, if any
         * @param [response] DangerouslyDeleteBentoResponse
         */
        type DangerouslyDeleteBentoCallback = (error: (Error|null), response?: kappa.DangerouslyDeleteBentoResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#listBento}.
         * @param error Error, if any
         * @param [response] ListBentoResponse
         */
        type ListBentoCallback = (error: (Error|null), response?: kappa.ListBentoResponse) => void;

        /**
         * Callback as used by {@link kappa.Gamma#containerizeBento}.
         * @param error Error, if any
         * @param [response] ContainerizeBentoResponse
         */
        type ContainerizeBentoCallback = (error: (Error|null), response?: kappa.ContainerizeBentoResponse) => void;
    }

    /** Properties of a HealthCheckResponse. */
    interface IHealthCheckResponse {

        /** HealthCheckResponse status */
        status?: (kappa.IStatus|null);
    }

    /** Represents a HealthCheckResponse. */
    class HealthCheckResponse implements IHealthCheckResponse {

        /**
         * Constructs a new HealthCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IHealthCheckResponse);

        /** HealthCheckResponse status. */
        public status?: (kappa.IStatus|null);

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheckResponse instance
         */
        public static create(properties?: kappa.IHealthCheckResponse): kappa.HealthCheckResponse;

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link kappa.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link kappa.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.HealthCheckResponse;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.HealthCheckResponse;

        /**
         * Verifies a HealthCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.HealthCheckResponse;

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @param message HealthCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.HealthCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGammaServiceVersionResponse. */
    interface IGetGammaServiceVersionResponse {

        /** GetGammaServiceVersionResponse status */
        status?: (kappa.IStatus|null);

        /** GetGammaServiceVersionResponse version */
        version?: (string|null);
    }

    /** Represents a GetGammaServiceVersionResponse. */
    class GetGammaServiceVersionResponse implements IGetGammaServiceVersionResponse {

        /**
         * Constructs a new GetGammaServiceVersionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IGetGammaServiceVersionResponse);

        /** GetGammaServiceVersionResponse status. */
        public status?: (kappa.IStatus|null);

        /** GetGammaServiceVersionResponse version. */
        public version: string;

        /**
         * Creates a new GetGammaServiceVersionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGammaServiceVersionResponse instance
         */
        public static create(properties?: kappa.IGetGammaServiceVersionResponse): kappa.GetGammaServiceVersionResponse;

        /**
         * Encodes the specified GetGammaServiceVersionResponse message. Does not implicitly {@link kappa.GetGammaServiceVersionResponse.verify|verify} messages.
         * @param message GetGammaServiceVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IGetGammaServiceVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGammaServiceVersionResponse message, length delimited. Does not implicitly {@link kappa.GetGammaServiceVersionResponse.verify|verify} messages.
         * @param message GetGammaServiceVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IGetGammaServiceVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGammaServiceVersionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGammaServiceVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.GetGammaServiceVersionResponse;

        /**
         * Decodes a GetGammaServiceVersionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGammaServiceVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.GetGammaServiceVersionResponse;

        /**
         * Verifies a GetGammaServiceVersionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGammaServiceVersionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGammaServiceVersionResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.GetGammaServiceVersionResponse;

        /**
         * Creates a plain object from a GetGammaServiceVersionResponse message. Also converts values to other types if specified.
         * @param message GetGammaServiceVersionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.GetGammaServiceVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGammaServiceVersionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chunk. */
    interface IChunk {

        /** Chunk content */
        content?: (Uint8Array|null);
    }

    /** Represents a Chunk. */
    class Chunk implements IChunk {

        /**
         * Constructs a new Chunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IChunk);

        /** Chunk content. */
        public content: Uint8Array;

        /**
         * Creates a new Chunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chunk instance
         */
        public static create(properties?: kappa.IChunk): kappa.Chunk;

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link kappa.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link kappa.Chunk.verify|verify} messages.
         * @param message Chunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.Chunk;

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.Chunk;

        /**
         * Verifies a Chunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chunk
         */
        public static fromObject(object: { [k: string]: any }): kappa.Chunk;

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @param message Chunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.Chunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BentoUri. */
    interface IBentoUri {

        /** BentoUri type */
        type?: (kappa.BentoUri.StorageType|null);

        /** BentoUri uri */
        uri?: (string|null);

        /** BentoUri s3_presigned_url */
        s3_presigned_url?: (string|null);

        /** BentoUri gcs_presigned_url */
        gcs_presigned_url?: (string|null);

        /** BentoUri oci_presigned_url */
        oci_presigned_url?: (string|null);
    }

    /** Represents a BentoUri. */
    class BentoUri implements IBentoUri {

        /**
         * Constructs a new BentoUri.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IBentoUri);

        /** BentoUri type. */
        public type: kappa.BentoUri.StorageType;

        /** BentoUri uri. */
        public uri: string;

        /** BentoUri s3_presigned_url. */
        public s3_presigned_url: string;

        /** BentoUri gcs_presigned_url. */
        public gcs_presigned_url: string;

        /** BentoUri oci_presigned_url. */
        public oci_presigned_url: string;

        /**
         * Creates a new BentoUri instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BentoUri instance
         */
        public static create(properties?: kappa.IBentoUri): kappa.BentoUri;

        /**
         * Encodes the specified BentoUri message. Does not implicitly {@link kappa.BentoUri.verify|verify} messages.
         * @param message BentoUri message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IBentoUri, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BentoUri message, length delimited. Does not implicitly {@link kappa.BentoUri.verify|verify} messages.
         * @param message BentoUri message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IBentoUri, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BentoUri message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BentoUri
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.BentoUri;

        /**
         * Decodes a BentoUri message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BentoUri
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.BentoUri;

        /**
         * Verifies a BentoUri message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BentoUri message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BentoUri
         */
        public static fromObject(object: { [k: string]: any }): kappa.BentoUri;

        /**
         * Creates a plain object from a BentoUri message. Also converts values to other types if specified.
         * @param message BentoUri
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.BentoUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BentoUri to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BentoUri {

        /** StorageType enum. */
        enum StorageType {
            UNSET = 0,
            LOCAL = 1,
            S3 = 2,
            GCS = 3,
            AZURE_BLOB_STORAGE = 4,
            HDFS = 5,
            OCI = 6
        }
    }

    /** Properties of a BentoServiceMetadata. */
    interface IBentoServiceMetadata {

        /** BentoServiceMetadata name */
        name?: (string|null);

        /** BentoServiceMetadata version */
        version?: (string|null);

        /** BentoServiceMetadata created_at */
        created_at?: (google.protobuf.ITimestamp|null);

        /** BentoServiceMetadata env */
        env?: (kappa.BentoServiceMetadata.IBentoServiceEnv|null);

        /** BentoServiceMetadata artifacts */
        artifacts?: (kappa.BentoServiceMetadata.IBentoArtifact[]|null);

        /** BentoServiceMetadata apis */
        apis?: (kappa.BentoServiceMetadata.IBentoServiceApi[]|null);

        /** BentoServiceMetadata labels */
        labels?: ({ [k: string]: string }|null);
    }

    /** Represents a BentoServiceMetadata. */
    class BentoServiceMetadata implements IBentoServiceMetadata {

        /**
         * Constructs a new BentoServiceMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IBentoServiceMetadata);

        /** BentoServiceMetadata name. */
        public name: string;

        /** BentoServiceMetadata version. */
        public version: string;

        /** BentoServiceMetadata created_at. */
        public created_at?: (google.protobuf.ITimestamp|null);

        /** BentoServiceMetadata env. */
        public env?: (kappa.BentoServiceMetadata.IBentoServiceEnv|null);

        /** BentoServiceMetadata artifacts. */
        public artifacts: kappa.BentoServiceMetadata.IBentoArtifact[];

        /** BentoServiceMetadata apis. */
        public apis: kappa.BentoServiceMetadata.IBentoServiceApi[];

        /** BentoServiceMetadata labels. */
        public labels: { [k: string]: string };

        /**
         * Creates a new BentoServiceMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BentoServiceMetadata instance
         */
        public static create(properties?: kappa.IBentoServiceMetadata): kappa.BentoServiceMetadata;

        /**
         * Encodes the specified BentoServiceMetadata message. Does not implicitly {@link kappa.BentoServiceMetadata.verify|verify} messages.
         * @param message BentoServiceMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IBentoServiceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BentoServiceMetadata message, length delimited. Does not implicitly {@link kappa.BentoServiceMetadata.verify|verify} messages.
         * @param message BentoServiceMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IBentoServiceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BentoServiceMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BentoServiceMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.BentoServiceMetadata;

        /**
         * Decodes a BentoServiceMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BentoServiceMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.BentoServiceMetadata;

        /**
         * Verifies a BentoServiceMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BentoServiceMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BentoServiceMetadata
         */
        public static fromObject(object: { [k: string]: any }): kappa.BentoServiceMetadata;

        /**
         * Creates a plain object from a BentoServiceMetadata message. Also converts values to other types if specified.
         * @param message BentoServiceMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.BentoServiceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BentoServiceMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BentoServiceMetadata {

        /** Properties of a BentoServiceEnv. */
        interface IBentoServiceEnv {

            /** BentoServiceEnv setup_sh */
            setup_sh?: (string|null);

            /** BentoServiceEnv conda_env */
            conda_env?: (string|null);

            /** BentoServiceEnv pip_dependencies */
            pip_dependencies?: (string|null);

            /** BentoServiceEnv python_version */
            python_version?: (string|null);

            /** BentoServiceEnv docker_base_image */
            docker_base_image?: (string|null);

            /** BentoServiceEnv pip_packages */
            pip_packages?: (string[]|null);

            /** BentoServiceEnv requirements_txt */
            requirements_txt?: (string|null);
        }

        /** Represents a BentoServiceEnv. */
        class BentoServiceEnv implements IBentoServiceEnv {

            /**
             * Constructs a new BentoServiceEnv.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.BentoServiceMetadata.IBentoServiceEnv);

            /** BentoServiceEnv setup_sh. */
            public setup_sh: string;

            /** BentoServiceEnv conda_env. */
            public conda_env: string;

            /** BentoServiceEnv pip_dependencies. */
            public pip_dependencies: string;

            /** BentoServiceEnv python_version. */
            public python_version: string;

            /** BentoServiceEnv docker_base_image. */
            public docker_base_image: string;

            /** BentoServiceEnv pip_packages. */
            public pip_packages: string[];

            /** BentoServiceEnv requirements_txt. */
            public requirements_txt: string;

            /**
             * Creates a new BentoServiceEnv instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BentoServiceEnv instance
             */
            public static create(properties?: kappa.BentoServiceMetadata.IBentoServiceEnv): kappa.BentoServiceMetadata.BentoServiceEnv;

            /**
             * Encodes the specified BentoServiceEnv message. Does not implicitly {@link kappa.BentoServiceMetadata.BentoServiceEnv.verify|verify} messages.
             * @param message BentoServiceEnv message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.BentoServiceMetadata.IBentoServiceEnv, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BentoServiceEnv message, length delimited. Does not implicitly {@link kappa.BentoServiceMetadata.BentoServiceEnv.verify|verify} messages.
             * @param message BentoServiceEnv message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.BentoServiceMetadata.IBentoServiceEnv, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BentoServiceEnv message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BentoServiceEnv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.BentoServiceMetadata.BentoServiceEnv;

            /**
             * Decodes a BentoServiceEnv message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BentoServiceEnv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.BentoServiceMetadata.BentoServiceEnv;

            /**
             * Verifies a BentoServiceEnv message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BentoServiceEnv message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BentoServiceEnv
             */
            public static fromObject(object: { [k: string]: any }): kappa.BentoServiceMetadata.BentoServiceEnv;

            /**
             * Creates a plain object from a BentoServiceEnv message. Also converts values to other types if specified.
             * @param message BentoServiceEnv
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.BentoServiceMetadata.BentoServiceEnv, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BentoServiceEnv to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BentoArtifact. */
        interface IBentoArtifact {

            /** BentoArtifact name */
            name?: (string|null);

            /** BentoArtifact artifact_type */
            artifact_type?: (string|null);

            /** BentoArtifact metadata */
            metadata?: (google.protobuf.IStruct|null);
        }

        /** Represents a BentoArtifact. */
        class BentoArtifact implements IBentoArtifact {

            /**
             * Constructs a new BentoArtifact.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.BentoServiceMetadata.IBentoArtifact);

            /** BentoArtifact name. */
            public name: string;

            /** BentoArtifact artifact_type. */
            public artifact_type: string;

            /** BentoArtifact metadata. */
            public metadata?: (google.protobuf.IStruct|null);

            /**
             * Creates a new BentoArtifact instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BentoArtifact instance
             */
            public static create(properties?: kappa.BentoServiceMetadata.IBentoArtifact): kappa.BentoServiceMetadata.BentoArtifact;

            /**
             * Encodes the specified BentoArtifact message. Does not implicitly {@link kappa.BentoServiceMetadata.BentoArtifact.verify|verify} messages.
             * @param message BentoArtifact message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.BentoServiceMetadata.IBentoArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BentoArtifact message, length delimited. Does not implicitly {@link kappa.BentoServiceMetadata.BentoArtifact.verify|verify} messages.
             * @param message BentoArtifact message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.BentoServiceMetadata.IBentoArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BentoArtifact message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BentoArtifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.BentoServiceMetadata.BentoArtifact;

            /**
             * Decodes a BentoArtifact message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BentoArtifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.BentoServiceMetadata.BentoArtifact;

            /**
             * Verifies a BentoArtifact message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BentoArtifact message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BentoArtifact
             */
            public static fromObject(object: { [k: string]: any }): kappa.BentoServiceMetadata.BentoArtifact;

            /**
             * Creates a plain object from a BentoArtifact message. Also converts values to other types if specified.
             * @param message BentoArtifact
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.BentoServiceMetadata.BentoArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BentoArtifact to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BentoServiceApi. */
        interface IBentoServiceApi {

            /** BentoServiceApi name */
            name?: (string|null);

            /** BentoServiceApi input_type */
            input_type?: (string|null);

            /** BentoServiceApi docs */
            docs?: (string|null);

            /** BentoServiceApi input_config */
            input_config?: (google.protobuf.IStruct|null);

            /** BentoServiceApi output_config */
            output_config?: (google.protobuf.IStruct|null);

            /** BentoServiceApi output_type */
            output_type?: (string|null);

            /** BentoServiceApi mb_max_latency */
            mb_max_latency?: (number|null);

            /** BentoServiceApi mb_max_batch_size */
            mb_max_batch_size?: (number|null);

            /** BentoServiceApi batch */
            batch?: (boolean|null);

            /** BentoServiceApi route */
            route?: (string|null);
        }

        /** Represents a BentoServiceApi. */
        class BentoServiceApi implements IBentoServiceApi {

            /**
             * Constructs a new BentoServiceApi.
             * @param [properties] Properties to set
             */
            constructor(properties?: kappa.BentoServiceMetadata.IBentoServiceApi);

            /** BentoServiceApi name. */
            public name: string;

            /** BentoServiceApi input_type. */
            public input_type: string;

            /** BentoServiceApi docs. */
            public docs: string;

            /** BentoServiceApi input_config. */
            public input_config?: (google.protobuf.IStruct|null);

            /** BentoServiceApi output_config. */
            public output_config?: (google.protobuf.IStruct|null);

            /** BentoServiceApi output_type. */
            public output_type: string;

            /** BentoServiceApi mb_max_latency. */
            public mb_max_latency: number;

            /** BentoServiceApi mb_max_batch_size. */
            public mb_max_batch_size: number;

            /** BentoServiceApi batch. */
            public batch: boolean;

            /** BentoServiceApi route. */
            public route: string;

            /**
             * Creates a new BentoServiceApi instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BentoServiceApi instance
             */
            public static create(properties?: kappa.BentoServiceMetadata.IBentoServiceApi): kappa.BentoServiceMetadata.BentoServiceApi;

            /**
             * Encodes the specified BentoServiceApi message. Does not implicitly {@link kappa.BentoServiceMetadata.BentoServiceApi.verify|verify} messages.
             * @param message BentoServiceApi message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: kappa.BentoServiceMetadata.IBentoServiceApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BentoServiceApi message, length delimited. Does not implicitly {@link kappa.BentoServiceMetadata.BentoServiceApi.verify|verify} messages.
             * @param message BentoServiceApi message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: kappa.BentoServiceMetadata.IBentoServiceApi, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BentoServiceApi message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BentoServiceApi
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.BentoServiceMetadata.BentoServiceApi;

            /**
             * Decodes a BentoServiceApi message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BentoServiceApi
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.BentoServiceMetadata.BentoServiceApi;

            /**
             * Verifies a BentoServiceApi message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BentoServiceApi message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BentoServiceApi
             */
            public static fromObject(object: { [k: string]: any }): kappa.BentoServiceMetadata.BentoServiceApi;

            /**
             * Creates a plain object from a BentoServiceApi message. Also converts values to other types if specified.
             * @param message BentoServiceApi
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: kappa.BentoServiceMetadata.BentoServiceApi, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BentoServiceApi to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Bento. */
    interface IBento {

        /** Bento name */
        name?: (string|null);

        /** Bento version */
        version?: (string|null);

        /** Bento uri */
        uri?: (kappa.IBentoUri|null);

        /** Bento bento_service_metadata */
        bento_service_metadata?: (kappa.IBentoServiceMetadata|null);

        /** Bento status */
        status?: (kappa.IUploadStatus|null);
    }

    /** Represents a Bento. */
    class Bento implements IBento {

        /**
         * Constructs a new Bento.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IBento);

        /** Bento name. */
        public name: string;

        /** Bento version. */
        public version: string;

        /** Bento uri. */
        public uri?: (kappa.IBentoUri|null);

        /** Bento bento_service_metadata. */
        public bento_service_metadata?: (kappa.IBentoServiceMetadata|null);

        /** Bento status. */
        public status?: (kappa.IUploadStatus|null);

        /**
         * Creates a new Bento instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bento instance
         */
        public static create(properties?: kappa.IBento): kappa.Bento;

        /**
         * Encodes the specified Bento message. Does not implicitly {@link kappa.Bento.verify|verify} messages.
         * @param message Bento message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IBento, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bento message, length delimited. Does not implicitly {@link kappa.Bento.verify|verify} messages.
         * @param message Bento message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IBento, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bento message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bento
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.Bento;

        /**
         * Decodes a Bento message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bento
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.Bento;

        /**
         * Verifies a Bento message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bento message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bento
         */
        public static fromObject(object: { [k: string]: any }): kappa.Bento;

        /**
         * Creates a plain object from a Bento message. Also converts values to other types if specified.
         * @param message Bento
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.Bento, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bento to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddBentoRequest. */
    interface IAddBentoRequest {

        /** AddBentoRequest bento_name */
        bento_name?: (string|null);

        /** AddBentoRequest bento_version */
        bento_version?: (string|null);
    }

    /** Represents an AddBentoRequest. */
    class AddBentoRequest implements IAddBentoRequest {

        /**
         * Constructs a new AddBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IAddBentoRequest);

        /** AddBentoRequest bento_name. */
        public bento_name: string;

        /** AddBentoRequest bento_version. */
        public bento_version: string;

        /**
         * Creates a new AddBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddBentoRequest instance
         */
        public static create(properties?: kappa.IAddBentoRequest): kappa.AddBentoRequest;

        /**
         * Encodes the specified AddBentoRequest message. Does not implicitly {@link kappa.AddBentoRequest.verify|verify} messages.
         * @param message AddBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IAddBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddBentoRequest message, length delimited. Does not implicitly {@link kappa.AddBentoRequest.verify|verify} messages.
         * @param message AddBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IAddBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.AddBentoRequest;

        /**
         * Decodes an AddBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.AddBentoRequest;

        /**
         * Verifies an AddBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.AddBentoRequest;

        /**
         * Creates a plain object from an AddBentoRequest message. Also converts values to other types if specified.
         * @param message AddBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.AddBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddBentoResponse. */
    interface IAddBentoResponse {

        /** AddBentoResponse status */
        status?: (kappa.IStatus|null);

        /** AddBentoResponse uri */
        uri?: (kappa.IBentoUri|null);
    }

    /** Represents an AddBentoResponse. */
    class AddBentoResponse implements IAddBentoResponse {

        /**
         * Constructs a new AddBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IAddBentoResponse);

        /** AddBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /** AddBentoResponse uri. */
        public uri?: (kappa.IBentoUri|null);

        /**
         * Creates a new AddBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddBentoResponse instance
         */
        public static create(properties?: kappa.IAddBentoResponse): kappa.AddBentoResponse;

        /**
         * Encodes the specified AddBentoResponse message. Does not implicitly {@link kappa.AddBentoResponse.verify|verify} messages.
         * @param message AddBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IAddBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddBentoResponse message, length delimited. Does not implicitly {@link kappa.AddBentoResponse.verify|verify} messages.
         * @param message AddBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IAddBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.AddBentoResponse;

        /**
         * Decodes an AddBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.AddBentoResponse;

        /**
         * Verifies an AddBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.AddBentoResponse;

        /**
         * Creates a plain object from an AddBentoResponse message. Also converts values to other types if specified.
         * @param message AddBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.AddBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadStatus. */
    interface IUploadStatus {

        /** UploadStatus status */
        status?: (kappa.UploadStatus.Status|null);

        /** UploadStatus updated_at */
        updated_at?: (google.protobuf.ITimestamp|null);

        /** UploadStatus percentage */
        percentage?: (number|null);

        /** UploadStatus error_message */
        error_message?: (string|null);
    }

    /** Represents an UploadStatus. */
    class UploadStatus implements IUploadStatus {

        /**
         * Constructs a new UploadStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IUploadStatus);

        /** UploadStatus status. */
        public status: kappa.UploadStatus.Status;

        /** UploadStatus updated_at. */
        public updated_at?: (google.protobuf.ITimestamp|null);

        /** UploadStatus percentage. */
        public percentage: number;

        /** UploadStatus error_message. */
        public error_message: string;

        /**
         * Creates a new UploadStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadStatus instance
         */
        public static create(properties?: kappa.IUploadStatus): kappa.UploadStatus;

        /**
         * Encodes the specified UploadStatus message. Does not implicitly {@link kappa.UploadStatus.verify|verify} messages.
         * @param message UploadStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IUploadStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadStatus message, length delimited. Does not implicitly {@link kappa.UploadStatus.verify|verify} messages.
         * @param message UploadStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IUploadStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.UploadStatus;

        /**
         * Decodes an UploadStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.UploadStatus;

        /**
         * Verifies an UploadStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadStatus
         */
        public static fromObject(object: { [k: string]: any }): kappa.UploadStatus;

        /**
         * Creates a plain object from an UploadStatus message. Also converts values to other types if specified.
         * @param message UploadStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.UploadStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace UploadStatus {

        /** Status enum. */
        enum Status {
            UNINITIALIZED = 0,
            UPLOADING = 1,
            DONE = 2,
            ERROR = 3,
            TIMEOUT = 4
        }
    }

    /** Properties of an UpdateBentoRequest. */
    interface IUpdateBentoRequest {

        /** UpdateBentoRequest bento_name */
        bento_name?: (string|null);

        /** UpdateBentoRequest bento_version */
        bento_version?: (string|null);

        /** UpdateBentoRequest upload_status */
        upload_status?: (kappa.IUploadStatus|null);

        /** UpdateBentoRequest service_metadata */
        service_metadata?: (kappa.IBentoServiceMetadata|null);
    }

    /** Represents an UpdateBentoRequest. */
    class UpdateBentoRequest implements IUpdateBentoRequest {

        /**
         * Constructs a new UpdateBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IUpdateBentoRequest);

        /** UpdateBentoRequest bento_name. */
        public bento_name: string;

        /** UpdateBentoRequest bento_version. */
        public bento_version: string;

        /** UpdateBentoRequest upload_status. */
        public upload_status?: (kappa.IUploadStatus|null);

        /** UpdateBentoRequest service_metadata. */
        public service_metadata?: (kappa.IBentoServiceMetadata|null);

        /**
         * Creates a new UpdateBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateBentoRequest instance
         */
        public static create(properties?: kappa.IUpdateBentoRequest): kappa.UpdateBentoRequest;

        /**
         * Encodes the specified UpdateBentoRequest message. Does not implicitly {@link kappa.UpdateBentoRequest.verify|verify} messages.
         * @param message UpdateBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IUpdateBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateBentoRequest message, length delimited. Does not implicitly {@link kappa.UpdateBentoRequest.verify|verify} messages.
         * @param message UpdateBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IUpdateBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.UpdateBentoRequest;

        /**
         * Decodes an UpdateBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.UpdateBentoRequest;

        /**
         * Verifies an UpdateBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.UpdateBentoRequest;

        /**
         * Creates a plain object from an UpdateBentoRequest message. Also converts values to other types if specified.
         * @param message UpdateBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.UpdateBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateBentoResponse. */
    interface IUpdateBentoResponse {

        /** UpdateBentoResponse status */
        status?: (kappa.IStatus|null);
    }

    /** Represents an UpdateBentoResponse. */
    class UpdateBentoResponse implements IUpdateBentoResponse {

        /**
         * Constructs a new UpdateBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IUpdateBentoResponse);

        /** UpdateBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /**
         * Creates a new UpdateBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateBentoResponse instance
         */
        public static create(properties?: kappa.IUpdateBentoResponse): kappa.UpdateBentoResponse;

        /**
         * Encodes the specified UpdateBentoResponse message. Does not implicitly {@link kappa.UpdateBentoResponse.verify|verify} messages.
         * @param message UpdateBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IUpdateBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateBentoResponse message, length delimited. Does not implicitly {@link kappa.UpdateBentoResponse.verify|verify} messages.
         * @param message UpdateBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IUpdateBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.UpdateBentoResponse;

        /**
         * Decodes an UpdateBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.UpdateBentoResponse;

        /**
         * Verifies an UpdateBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.UpdateBentoResponse;

        /**
         * Creates a plain object from an UpdateBentoResponse message. Also converts values to other types if specified.
         * @param message UpdateBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.UpdateBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DangerouslyDeleteBentoRequest. */
    interface IDangerouslyDeleteBentoRequest {

        /** DangerouslyDeleteBentoRequest bento_name */
        bento_name?: (string|null);

        /** DangerouslyDeleteBentoRequest bento_version */
        bento_version?: (string|null);
    }

    /** Represents a DangerouslyDeleteBentoRequest. */
    class DangerouslyDeleteBentoRequest implements IDangerouslyDeleteBentoRequest {

        /**
         * Constructs a new DangerouslyDeleteBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDangerouslyDeleteBentoRequest);

        /** DangerouslyDeleteBentoRequest bento_name. */
        public bento_name: string;

        /** DangerouslyDeleteBentoRequest bento_version. */
        public bento_version: string;

        /**
         * Creates a new DangerouslyDeleteBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DangerouslyDeleteBentoRequest instance
         */
        public static create(properties?: kappa.IDangerouslyDeleteBentoRequest): kappa.DangerouslyDeleteBentoRequest;

        /**
         * Encodes the specified DangerouslyDeleteBentoRequest message. Does not implicitly {@link kappa.DangerouslyDeleteBentoRequest.verify|verify} messages.
         * @param message DangerouslyDeleteBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDangerouslyDeleteBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DangerouslyDeleteBentoRequest message, length delimited. Does not implicitly {@link kappa.DangerouslyDeleteBentoRequest.verify|verify} messages.
         * @param message DangerouslyDeleteBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDangerouslyDeleteBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DangerouslyDeleteBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DangerouslyDeleteBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DangerouslyDeleteBentoRequest;

        /**
         * Decodes a DangerouslyDeleteBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DangerouslyDeleteBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DangerouslyDeleteBentoRequest;

        /**
         * Verifies a DangerouslyDeleteBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DangerouslyDeleteBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DangerouslyDeleteBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.DangerouslyDeleteBentoRequest;

        /**
         * Creates a plain object from a DangerouslyDeleteBentoRequest message. Also converts values to other types if specified.
         * @param message DangerouslyDeleteBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DangerouslyDeleteBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DangerouslyDeleteBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DangerouslyDeleteBentoResponse. */
    interface IDangerouslyDeleteBentoResponse {

        /** DangerouslyDeleteBentoResponse status */
        status?: (kappa.IStatus|null);
    }

    /** Represents a DangerouslyDeleteBentoResponse. */
    class DangerouslyDeleteBentoResponse implements IDangerouslyDeleteBentoResponse {

        /**
         * Constructs a new DangerouslyDeleteBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IDangerouslyDeleteBentoResponse);

        /** DangerouslyDeleteBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /**
         * Creates a new DangerouslyDeleteBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DangerouslyDeleteBentoResponse instance
         */
        public static create(properties?: kappa.IDangerouslyDeleteBentoResponse): kappa.DangerouslyDeleteBentoResponse;

        /**
         * Encodes the specified DangerouslyDeleteBentoResponse message. Does not implicitly {@link kappa.DangerouslyDeleteBentoResponse.verify|verify} messages.
         * @param message DangerouslyDeleteBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IDangerouslyDeleteBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DangerouslyDeleteBentoResponse message, length delimited. Does not implicitly {@link kappa.DangerouslyDeleteBentoResponse.verify|verify} messages.
         * @param message DangerouslyDeleteBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IDangerouslyDeleteBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DangerouslyDeleteBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DangerouslyDeleteBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.DangerouslyDeleteBentoResponse;

        /**
         * Decodes a DangerouslyDeleteBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DangerouslyDeleteBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.DangerouslyDeleteBentoResponse;

        /**
         * Verifies a DangerouslyDeleteBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DangerouslyDeleteBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DangerouslyDeleteBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.DangerouslyDeleteBentoResponse;

        /**
         * Creates a plain object from a DangerouslyDeleteBentoResponse message. Also converts values to other types if specified.
         * @param message DangerouslyDeleteBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.DangerouslyDeleteBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DangerouslyDeleteBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetBentoRequest. */
    interface IGetBentoRequest {

        /** GetBentoRequest bento_name */
        bento_name?: (string|null);

        /** GetBentoRequest bento_version */
        bento_version?: (string|null);
    }

    /** Represents a GetBentoRequest. */
    class GetBentoRequest implements IGetBentoRequest {

        /**
         * Constructs a new GetBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IGetBentoRequest);

        /** GetBentoRequest bento_name. */
        public bento_name: string;

        /** GetBentoRequest bento_version. */
        public bento_version: string;

        /**
         * Creates a new GetBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBentoRequest instance
         */
        public static create(properties?: kappa.IGetBentoRequest): kappa.GetBentoRequest;

        /**
         * Encodes the specified GetBentoRequest message. Does not implicitly {@link kappa.GetBentoRequest.verify|verify} messages.
         * @param message GetBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IGetBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetBentoRequest message, length delimited. Does not implicitly {@link kappa.GetBentoRequest.verify|verify} messages.
         * @param message GetBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IGetBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.GetBentoRequest;

        /**
         * Decodes a GetBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.GetBentoRequest;

        /**
         * Verifies a GetBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.GetBentoRequest;

        /**
         * Creates a plain object from a GetBentoRequest message. Also converts values to other types if specified.
         * @param message GetBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.GetBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetBentoResponse. */
    interface IGetBentoResponse {

        /** GetBentoResponse status */
        status?: (kappa.IStatus|null);

        /** GetBentoResponse bento */
        bento?: (kappa.IBento|null);
    }

    /** Represents a GetBentoResponse. */
    class GetBentoResponse implements IGetBentoResponse {

        /**
         * Constructs a new GetBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IGetBentoResponse);

        /** GetBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /** GetBentoResponse bento. */
        public bento?: (kappa.IBento|null);

        /**
         * Creates a new GetBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBentoResponse instance
         */
        public static create(properties?: kappa.IGetBentoResponse): kappa.GetBentoResponse;

        /**
         * Encodes the specified GetBentoResponse message. Does not implicitly {@link kappa.GetBentoResponse.verify|verify} messages.
         * @param message GetBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IGetBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetBentoResponse message, length delimited. Does not implicitly {@link kappa.GetBentoResponse.verify|verify} messages.
         * @param message GetBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IGetBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.GetBentoResponse;

        /**
         * Decodes a GetBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.GetBentoResponse;

        /**
         * Verifies a GetBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.GetBentoResponse;

        /**
         * Creates a plain object from a GetBentoResponse message. Also converts values to other types if specified.
         * @param message GetBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.GetBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListBentoRequest. */
    interface IListBentoRequest {

        /** ListBentoRequest bento_name */
        bento_name?: (string|null);

        /** ListBentoRequest offset */
        offset?: (number|null);

        /** ListBentoRequest limit */
        limit?: (number|null);

        /** ListBentoRequest order_by */
        order_by?: (kappa.ListBentoRequest.SORTABLE_COLUMN|null);

        /** ListBentoRequest ascending_order */
        ascending_order?: (boolean|null);

        /** ListBentoRequest label_selectors */
        label_selectors?: (kappa.ILabelSelectors|null);
    }

    /** Represents a ListBentoRequest. */
    class ListBentoRequest implements IListBentoRequest {

        /**
         * Constructs a new ListBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IListBentoRequest);

        /** ListBentoRequest bento_name. */
        public bento_name: string;

        /** ListBentoRequest offset. */
        public offset: number;

        /** ListBentoRequest limit. */
        public limit: number;

        /** ListBentoRequest order_by. */
        public order_by: kappa.ListBentoRequest.SORTABLE_COLUMN;

        /** ListBentoRequest ascending_order. */
        public ascending_order: boolean;

        /** ListBentoRequest label_selectors. */
        public label_selectors?: (kappa.ILabelSelectors|null);

        /**
         * Creates a new ListBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBentoRequest instance
         */
        public static create(properties?: kappa.IListBentoRequest): kappa.ListBentoRequest;

        /**
         * Encodes the specified ListBentoRequest message. Does not implicitly {@link kappa.ListBentoRequest.verify|verify} messages.
         * @param message ListBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IListBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBentoRequest message, length delimited. Does not implicitly {@link kappa.ListBentoRequest.verify|verify} messages.
         * @param message ListBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IListBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ListBentoRequest;

        /**
         * Decodes a ListBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ListBentoRequest;

        /**
         * Verifies a ListBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.ListBentoRequest;

        /**
         * Creates a plain object from a ListBentoRequest message. Also converts values to other types if specified.
         * @param message ListBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ListBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ListBentoRequest {

        /** SORTABLE_COLUMN enum. */
        enum SORTABLE_COLUMN {
            created_at = 0,
            name = 1
        }
    }

    /** Properties of a ListBentoResponse. */
    interface IListBentoResponse {

        /** ListBentoResponse status */
        status?: (kappa.IStatus|null);

        /** ListBentoResponse bentos */
        bentos?: (kappa.IBento[]|null);
    }

    /** Represents a ListBentoResponse. */
    class ListBentoResponse implements IListBentoResponse {

        /**
         * Constructs a new ListBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IListBentoResponse);

        /** ListBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /** ListBentoResponse bentos. */
        public bentos: kappa.IBento[];

        /**
         * Creates a new ListBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBentoResponse instance
         */
        public static create(properties?: kappa.IListBentoResponse): kappa.ListBentoResponse;

        /**
         * Encodes the specified ListBentoResponse message. Does not implicitly {@link kappa.ListBentoResponse.verify|verify} messages.
         * @param message ListBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IListBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBentoResponse message, length delimited. Does not implicitly {@link kappa.ListBentoResponse.verify|verify} messages.
         * @param message ListBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IListBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ListBentoResponse;

        /**
         * Decodes a ListBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ListBentoResponse;

        /**
         * Verifies a ListBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.ListBentoResponse;

        /**
         * Creates a plain object from a ListBentoResponse message. Also converts values to other types if specified.
         * @param message ListBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ListBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainerizeBentoRequest. */
    interface IContainerizeBentoRequest {

        /** ContainerizeBentoRequest bento_name */
        bento_name?: (string|null);

        /** ContainerizeBentoRequest bento_version */
        bento_version?: (string|null);

        /** ContainerizeBentoRequest tag */
        tag?: (string|null);

        /** ContainerizeBentoRequest build_args */
        build_args?: ({ [k: string]: string }|null);

        /** ContainerizeBentoRequest push */
        push?: (boolean|null);
    }

    /** Represents a ContainerizeBentoRequest. */
    class ContainerizeBentoRequest implements IContainerizeBentoRequest {

        /**
         * Constructs a new ContainerizeBentoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IContainerizeBentoRequest);

        /** ContainerizeBentoRequest bento_name. */
        public bento_name: string;

        /** ContainerizeBentoRequest bento_version. */
        public bento_version: string;

        /** ContainerizeBentoRequest tag. */
        public tag: string;

        /** ContainerizeBentoRequest build_args. */
        public build_args: { [k: string]: string };

        /** ContainerizeBentoRequest push. */
        public push: boolean;

        /**
         * Creates a new ContainerizeBentoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerizeBentoRequest instance
         */
        public static create(properties?: kappa.IContainerizeBentoRequest): kappa.ContainerizeBentoRequest;

        /**
         * Encodes the specified ContainerizeBentoRequest message. Does not implicitly {@link kappa.ContainerizeBentoRequest.verify|verify} messages.
         * @param message ContainerizeBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IContainerizeBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerizeBentoRequest message, length delimited. Does not implicitly {@link kappa.ContainerizeBentoRequest.verify|verify} messages.
         * @param message ContainerizeBentoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IContainerizeBentoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerizeBentoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerizeBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ContainerizeBentoRequest;

        /**
         * Decodes a ContainerizeBentoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerizeBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ContainerizeBentoRequest;

        /**
         * Verifies a ContainerizeBentoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerizeBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerizeBentoRequest
         */
        public static fromObject(object: { [k: string]: any }): kappa.ContainerizeBentoRequest;

        /**
         * Creates a plain object from a ContainerizeBentoRequest message. Also converts values to other types if specified.
         * @param message ContainerizeBentoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ContainerizeBentoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerizeBentoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainerizeBentoResponse. */
    interface IContainerizeBentoResponse {

        /** ContainerizeBentoResponse status */
        status?: (kappa.IStatus|null);

        /** ContainerizeBentoResponse tag */
        tag?: (string|null);
    }

    /** Represents a ContainerizeBentoResponse. */
    class ContainerizeBentoResponse implements IContainerizeBentoResponse {

        /**
         * Constructs a new ContainerizeBentoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kappa.IContainerizeBentoResponse);

        /** ContainerizeBentoResponse status. */
        public status?: (kappa.IStatus|null);

        /** ContainerizeBentoResponse tag. */
        public tag: string;

        /**
         * Creates a new ContainerizeBentoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerizeBentoResponse instance
         */
        public static create(properties?: kappa.IContainerizeBentoResponse): kappa.ContainerizeBentoResponse;

        /**
         * Encodes the specified ContainerizeBentoResponse message. Does not implicitly {@link kappa.ContainerizeBentoResponse.verify|verify} messages.
         * @param message ContainerizeBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kappa.IContainerizeBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerizeBentoResponse message, length delimited. Does not implicitly {@link kappa.ContainerizeBentoResponse.verify|verify} messages.
         * @param message ContainerizeBentoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kappa.IContainerizeBentoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerizeBentoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerizeBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kappa.ContainerizeBentoResponse;

        /**
         * Decodes a ContainerizeBentoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerizeBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kappa.ContainerizeBentoResponse;

        /**
         * Verifies a ContainerizeBentoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerizeBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerizeBentoResponse
         */
        public static fromObject(object: { [k: string]: any }): kappa.ContainerizeBentoResponse;

        /**
         * Creates a plain object from a ContainerizeBentoResponse message. Also converts values to other types if specified.
         * @param message ContainerizeBentoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kappa.ContainerizeBentoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerizeBentoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
