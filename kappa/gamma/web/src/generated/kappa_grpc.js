/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const kappa = $root.kappa = (() => {

    /**
     * Namespace kappa.
     * @exports kappa
     * @namespace
     */
    const kappa = {};

    kappa.DeploymentSpec = (function() {

        /**
         * Properties of a DeploymentSpec.
         * @memberof kappa
         * @interface IDeploymentSpec
         * @property {string|null} [bento_name] DeploymentSpec bento_name
         * @property {string|null} [bento_version] DeploymentSpec bento_version
         * @property {kappa.DeploymentSpec.DeploymentOperator|null} [operator] DeploymentSpec operator
         * @property {kappa.DeploymentSpec.ICustomOperatorConfig|null} [custom_operator_config] DeploymentSpec custom_operator_config
         * @property {kappa.DeploymentSpec.ISageMakerOperatorConfig|null} [sagemaker_operator_config] DeploymentSpec sagemaker_operator_config
         * @property {kappa.DeploymentSpec.IAwsLambdaOperatorConfig|null} [aws_lambda_operator_config] DeploymentSpec aws_lambda_operator_config
         * @property {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig|null} [azure_functions_operator_config] DeploymentSpec azure_functions_operator_config
         * @property {kappa.DeploymentSpec.IAwsEc2OperatorConfig|null} [aws_ec2_operator_config] DeploymentSpec aws_ec2_operator_config
         */

        /**
         * Constructs a new DeploymentSpec.
         * @memberof kappa
         * @classdesc Represents a DeploymentSpec.
         * @implements IDeploymentSpec
         * @constructor
         * @param {kappa.IDeploymentSpec=} [properties] Properties to set
         */
        function DeploymentSpec(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeploymentSpec bento_name.
         * @member {string} bento_name
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.bento_name = "";

        /**
         * DeploymentSpec bento_version.
         * @member {string} bento_version
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.bento_version = "";

        /**
         * DeploymentSpec operator.
         * @member {kappa.DeploymentSpec.DeploymentOperator} operator
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.operator = 0;

        /**
         * DeploymentSpec custom_operator_config.
         * @member {kappa.DeploymentSpec.ICustomOperatorConfig|null|undefined} custom_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.custom_operator_config = null;

        /**
         * DeploymentSpec sagemaker_operator_config.
         * @member {kappa.DeploymentSpec.ISageMakerOperatorConfig|null|undefined} sagemaker_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.sagemaker_operator_config = null;

        /**
         * DeploymentSpec aws_lambda_operator_config.
         * @member {kappa.DeploymentSpec.IAwsLambdaOperatorConfig|null|undefined} aws_lambda_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.aws_lambda_operator_config = null;

        /**
         * DeploymentSpec azure_functions_operator_config.
         * @member {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig|null|undefined} azure_functions_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.azure_functions_operator_config = null;

        /**
         * DeploymentSpec aws_ec2_operator_config.
         * @member {kappa.DeploymentSpec.IAwsEc2OperatorConfig|null|undefined} aws_ec2_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        DeploymentSpec.prototype.aws_ec2_operator_config = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * DeploymentSpec deployment_operator_config.
         * @member {"custom_operator_config"|"sagemaker_operator_config"|"aws_lambda_operator_config"|"azure_functions_operator_config"|"aws_ec2_operator_config"|undefined} deployment_operator_config
         * @memberof kappa.DeploymentSpec
         * @instance
         */
        Object.defineProperty(DeploymentSpec.prototype, "deployment_operator_config", {
            get: $util.oneOfGetter($oneOfFields = ["custom_operator_config", "sagemaker_operator_config", "aws_lambda_operator_config", "azure_functions_operator_config", "aws_ec2_operator_config"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeploymentSpec instance using the specified properties.
         * @function create
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {kappa.IDeploymentSpec=} [properties] Properties to set
         * @returns {kappa.DeploymentSpec} DeploymentSpec instance
         */
        DeploymentSpec.create = function create(properties) {
            return new DeploymentSpec(properties);
        };

        /**
         * Encodes the specified DeploymentSpec message. Does not implicitly {@link kappa.DeploymentSpec.verify|verify} messages.
         * @function encode
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {kappa.IDeploymentSpec} message DeploymentSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentSpec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.operator);
            if (message.custom_operator_config != null && Object.hasOwnProperty.call(message, "custom_operator_config"))
                $root.kappa.DeploymentSpec.CustomOperatorConfig.encode(message.custom_operator_config, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.sagemaker_operator_config != null && Object.hasOwnProperty.call(message, "sagemaker_operator_config"))
                $root.kappa.DeploymentSpec.SageMakerOperatorConfig.encode(message.sagemaker_operator_config, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.aws_lambda_operator_config != null && Object.hasOwnProperty.call(message, "aws_lambda_operator_config"))
                $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig.encode(message.aws_lambda_operator_config, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.azure_functions_operator_config != null && Object.hasOwnProperty.call(message, "azure_functions_operator_config"))
                $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig.encode(message.azure_functions_operator_config, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.aws_ec2_operator_config != null && Object.hasOwnProperty.call(message, "aws_ec2_operator_config"))
                $root.kappa.DeploymentSpec.AwsEc2OperatorConfig.encode(message.aws_ec2_operator_config, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeploymentSpec message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {kappa.IDeploymentSpec} message DeploymentSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentSpec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeploymentSpec message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DeploymentSpec} DeploymentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentSpec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                case 3:
                    message.operator = reader.int32();
                    break;
                case 4:
                    message.custom_operator_config = $root.kappa.DeploymentSpec.CustomOperatorConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sagemaker_operator_config = $root.kappa.DeploymentSpec.SageMakerOperatorConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.aws_lambda_operator_config = $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.azure_functions_operator_config = $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.aws_ec2_operator_config = $root.kappa.DeploymentSpec.AwsEc2OperatorConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeploymentSpec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DeploymentSpec} DeploymentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentSpec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeploymentSpec message.
         * @function verify
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeploymentSpec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                switch (message.operator) {
                default:
                    return "operator: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.custom_operator_config != null && message.hasOwnProperty("custom_operator_config")) {
                properties.deployment_operator_config = 1;
                {
                    let error = $root.kappa.DeploymentSpec.CustomOperatorConfig.verify(message.custom_operator_config);
                    if (error)
                        return "custom_operator_config." + error;
                }
            }
            if (message.sagemaker_operator_config != null && message.hasOwnProperty("sagemaker_operator_config")) {
                if (properties.deployment_operator_config === 1)
                    return "deployment_operator_config: multiple values";
                properties.deployment_operator_config = 1;
                {
                    let error = $root.kappa.DeploymentSpec.SageMakerOperatorConfig.verify(message.sagemaker_operator_config);
                    if (error)
                        return "sagemaker_operator_config." + error;
                }
            }
            if (message.aws_lambda_operator_config != null && message.hasOwnProperty("aws_lambda_operator_config")) {
                if (properties.deployment_operator_config === 1)
                    return "deployment_operator_config: multiple values";
                properties.deployment_operator_config = 1;
                {
                    let error = $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig.verify(message.aws_lambda_operator_config);
                    if (error)
                        return "aws_lambda_operator_config." + error;
                }
            }
            if (message.azure_functions_operator_config != null && message.hasOwnProperty("azure_functions_operator_config")) {
                if (properties.deployment_operator_config === 1)
                    return "deployment_operator_config: multiple values";
                properties.deployment_operator_config = 1;
                {
                    let error = $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig.verify(message.azure_functions_operator_config);
                    if (error)
                        return "azure_functions_operator_config." + error;
                }
            }
            if (message.aws_ec2_operator_config != null && message.hasOwnProperty("aws_ec2_operator_config")) {
                if (properties.deployment_operator_config === 1)
                    return "deployment_operator_config: multiple values";
                properties.deployment_operator_config = 1;
                {
                    let error = $root.kappa.DeploymentSpec.AwsEc2OperatorConfig.verify(message.aws_ec2_operator_config);
                    if (error)
                        return "aws_ec2_operator_config." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeploymentSpec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DeploymentSpec} DeploymentSpec
         */
        DeploymentSpec.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DeploymentSpec)
                return object;
            let message = new $root.kappa.DeploymentSpec();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            switch (object.operator) {
            case "UNSET":
            case 0:
                message.operator = 0;
                break;
            case "CUSTOM":
            case 1:
                message.operator = 1;
                break;
            case "AWS_SAGEMAKER":
            case 2:
                message.operator = 2;
                break;
            case "AWS_LAMBDA":
            case 3:
                message.operator = 3;
                break;
            case "AZURE_FUNCTIONS":
            case 4:
                message.operator = 4;
                break;
            case "AWS_EC2":
            case 5:
                message.operator = 5;
                break;
            }
            if (object.custom_operator_config != null) {
                if (typeof object.custom_operator_config !== "object")
                    throw TypeError(".kappa.DeploymentSpec.custom_operator_config: object expected");
                message.custom_operator_config = $root.kappa.DeploymentSpec.CustomOperatorConfig.fromObject(object.custom_operator_config);
            }
            if (object.sagemaker_operator_config != null) {
                if (typeof object.sagemaker_operator_config !== "object")
                    throw TypeError(".kappa.DeploymentSpec.sagemaker_operator_config: object expected");
                message.sagemaker_operator_config = $root.kappa.DeploymentSpec.SageMakerOperatorConfig.fromObject(object.sagemaker_operator_config);
            }
            if (object.aws_lambda_operator_config != null) {
                if (typeof object.aws_lambda_operator_config !== "object")
                    throw TypeError(".kappa.DeploymentSpec.aws_lambda_operator_config: object expected");
                message.aws_lambda_operator_config = $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig.fromObject(object.aws_lambda_operator_config);
            }
            if (object.azure_functions_operator_config != null) {
                if (typeof object.azure_functions_operator_config !== "object")
                    throw TypeError(".kappa.DeploymentSpec.azure_functions_operator_config: object expected");
                message.azure_functions_operator_config = $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig.fromObject(object.azure_functions_operator_config);
            }
            if (object.aws_ec2_operator_config != null) {
                if (typeof object.aws_ec2_operator_config !== "object")
                    throw TypeError(".kappa.DeploymentSpec.aws_ec2_operator_config: object expected");
                message.aws_ec2_operator_config = $root.kappa.DeploymentSpec.AwsEc2OperatorConfig.fromObject(object.aws_ec2_operator_config);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeploymentSpec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DeploymentSpec
         * @static
         * @param {kappa.DeploymentSpec} message DeploymentSpec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeploymentSpec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
                object.operator = options.enums === String ? "UNSET" : 0;
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = options.enums === String ? $root.kappa.DeploymentSpec.DeploymentOperator[message.operator] : message.operator;
            if (message.custom_operator_config != null && message.hasOwnProperty("custom_operator_config")) {
                object.custom_operator_config = $root.kappa.DeploymentSpec.CustomOperatorConfig.toObject(message.custom_operator_config, options);
                if (options.oneofs)
                    object.deployment_operator_config = "custom_operator_config";
            }
            if (message.sagemaker_operator_config != null && message.hasOwnProperty("sagemaker_operator_config")) {
                object.sagemaker_operator_config = $root.kappa.DeploymentSpec.SageMakerOperatorConfig.toObject(message.sagemaker_operator_config, options);
                if (options.oneofs)
                    object.deployment_operator_config = "sagemaker_operator_config";
            }
            if (message.aws_lambda_operator_config != null && message.hasOwnProperty("aws_lambda_operator_config")) {
                object.aws_lambda_operator_config = $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig.toObject(message.aws_lambda_operator_config, options);
                if (options.oneofs)
                    object.deployment_operator_config = "aws_lambda_operator_config";
            }
            if (message.azure_functions_operator_config != null && message.hasOwnProperty("azure_functions_operator_config")) {
                object.azure_functions_operator_config = $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig.toObject(message.azure_functions_operator_config, options);
                if (options.oneofs)
                    object.deployment_operator_config = "azure_functions_operator_config";
            }
            if (message.aws_ec2_operator_config != null && message.hasOwnProperty("aws_ec2_operator_config")) {
                object.aws_ec2_operator_config = $root.kappa.DeploymentSpec.AwsEc2OperatorConfig.toObject(message.aws_ec2_operator_config, options);
                if (options.oneofs)
                    object.deployment_operator_config = "aws_ec2_operator_config";
            }
            return object;
        };

        /**
         * Converts this DeploymentSpec to JSON.
         * @function toJSON
         * @memberof kappa.DeploymentSpec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeploymentSpec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DeploymentOperator enum.
         * @name kappa.DeploymentSpec.DeploymentOperator
         * @enum {number}
         * @property {number} UNSET=0 UNSET value
         * @property {number} CUSTOM=1 CUSTOM value
         * @property {number} AWS_SAGEMAKER=2 AWS_SAGEMAKER value
         * @property {number} AWS_LAMBDA=3 AWS_LAMBDA value
         * @property {number} AZURE_FUNCTIONS=4 AZURE_FUNCTIONS value
         * @property {number} AWS_EC2=5 AWS_EC2 value
         */
        DeploymentSpec.DeploymentOperator = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSET"] = 0;
            values[valuesById[1] = "CUSTOM"] = 1;
            values[valuesById[2] = "AWS_SAGEMAKER"] = 2;
            values[valuesById[3] = "AWS_LAMBDA"] = 3;
            values[valuesById[4] = "AZURE_FUNCTIONS"] = 4;
            values[valuesById[5] = "AWS_EC2"] = 5;
            return values;
        })();

        DeploymentSpec.CustomOperatorConfig = (function() {

            /**
             * Properties of a CustomOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @interface ICustomOperatorConfig
             * @property {string|null} [name] CustomOperatorConfig name
             * @property {google.protobuf.IStruct|null} [config] CustomOperatorConfig config
             */

            /**
             * Constructs a new CustomOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @classdesc Represents a CustomOperatorConfig.
             * @implements ICustomOperatorConfig
             * @constructor
             * @param {kappa.DeploymentSpec.ICustomOperatorConfig=} [properties] Properties to set
             */
            function CustomOperatorConfig(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomOperatorConfig name.
             * @member {string} name
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @instance
             */
            CustomOperatorConfig.prototype.name = "";

            /**
             * CustomOperatorConfig config.
             * @member {google.protobuf.IStruct|null|undefined} config
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @instance
             */
            CustomOperatorConfig.prototype.config = null;

            /**
             * Creates a new CustomOperatorConfig instance using the specified properties.
             * @function create
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ICustomOperatorConfig=} [properties] Properties to set
             * @returns {kappa.DeploymentSpec.CustomOperatorConfig} CustomOperatorConfig instance
             */
            CustomOperatorConfig.create = function create(properties) {
                return new CustomOperatorConfig(properties);
            };

            /**
             * Encodes the specified CustomOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.CustomOperatorConfig.verify|verify} messages.
             * @function encode
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ICustomOperatorConfig} message CustomOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomOperatorConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                    $root.google.protobuf.Struct.encode(message.config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CustomOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.CustomOperatorConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ICustomOperatorConfig} message CustomOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomOperatorConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CustomOperatorConfig message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.DeploymentSpec.CustomOperatorConfig} CustomOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomOperatorConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec.CustomOperatorConfig();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.config = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CustomOperatorConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.DeploymentSpec.CustomOperatorConfig} CustomOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomOperatorConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CustomOperatorConfig message.
             * @function verify
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomOperatorConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.config != null && message.hasOwnProperty("config")) {
                    let error = $root.google.protobuf.Struct.verify(message.config);
                    if (error)
                        return "config." + error;
                }
                return null;
            };

            /**
             * Creates a CustomOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.DeploymentSpec.CustomOperatorConfig} CustomOperatorConfig
             */
            CustomOperatorConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.DeploymentSpec.CustomOperatorConfig)
                    return object;
                let message = new $root.kappa.DeploymentSpec.CustomOperatorConfig();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.config != null) {
                    if (typeof object.config !== "object")
                        throw TypeError(".kappa.DeploymentSpec.CustomOperatorConfig.config: object expected");
                    message.config = $root.google.protobuf.Struct.fromObject(object.config);
                }
                return message;
            };

            /**
             * Creates a plain object from a CustomOperatorConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.CustomOperatorConfig} message CustomOperatorConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomOperatorConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.config = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.config != null && message.hasOwnProperty("config"))
                    object.config = $root.google.protobuf.Struct.toObject(message.config, options);
                return object;
            };

            /**
             * Converts this CustomOperatorConfig to JSON.
             * @function toJSON
             * @memberof kappa.DeploymentSpec.CustomOperatorConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomOperatorConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CustomOperatorConfig;
        })();

        DeploymentSpec.SageMakerOperatorConfig = (function() {

            /**
             * Properties of a SageMakerOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @interface ISageMakerOperatorConfig
             * @property {string|null} [region] SageMakerOperatorConfig region
             * @property {string|null} [instance_type] SageMakerOperatorConfig instance_type
             * @property {number|null} [instance_count] SageMakerOperatorConfig instance_count
             * @property {string|null} [api_name] SageMakerOperatorConfig api_name
             * @property {number|null} [num_of_gunicorn_workers_per_instance] SageMakerOperatorConfig num_of_gunicorn_workers_per_instance
             * @property {number|null} [timeout] SageMakerOperatorConfig timeout
             * @property {string|null} [data_capture_s3_prefix] SageMakerOperatorConfig data_capture_s3_prefix
             * @property {number|null} [data_capture_sample_percent] SageMakerOperatorConfig data_capture_sample_percent
             */

            /**
             * Constructs a new SageMakerOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @classdesc Represents a SageMakerOperatorConfig.
             * @implements ISageMakerOperatorConfig
             * @constructor
             * @param {kappa.DeploymentSpec.ISageMakerOperatorConfig=} [properties] Properties to set
             */
            function SageMakerOperatorConfig(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SageMakerOperatorConfig region.
             * @member {string} region
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.region = "";

            /**
             * SageMakerOperatorConfig instance_type.
             * @member {string} instance_type
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.instance_type = "";

            /**
             * SageMakerOperatorConfig instance_count.
             * @member {number} instance_count
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.instance_count = 0;

            /**
             * SageMakerOperatorConfig api_name.
             * @member {string} api_name
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.api_name = "";

            /**
             * SageMakerOperatorConfig num_of_gunicorn_workers_per_instance.
             * @member {number} num_of_gunicorn_workers_per_instance
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.num_of_gunicorn_workers_per_instance = 0;

            /**
             * SageMakerOperatorConfig timeout.
             * @member {number} timeout
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.timeout = 0;

            /**
             * SageMakerOperatorConfig data_capture_s3_prefix.
             * @member {string} data_capture_s3_prefix
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.data_capture_s3_prefix = "";

            /**
             * SageMakerOperatorConfig data_capture_sample_percent.
             * @member {number} data_capture_sample_percent
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             */
            SageMakerOperatorConfig.prototype.data_capture_sample_percent = 0;

            /**
             * Creates a new SageMakerOperatorConfig instance using the specified properties.
             * @function create
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ISageMakerOperatorConfig=} [properties] Properties to set
             * @returns {kappa.DeploymentSpec.SageMakerOperatorConfig} SageMakerOperatorConfig instance
             */
            SageMakerOperatorConfig.create = function create(properties) {
                return new SageMakerOperatorConfig(properties);
            };

            /**
             * Encodes the specified SageMakerOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.SageMakerOperatorConfig.verify|verify} messages.
             * @function encode
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ISageMakerOperatorConfig} message SageMakerOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SageMakerOperatorConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.region);
                if (message.instance_type != null && Object.hasOwnProperty.call(message, "instance_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.instance_type);
                if (message.instance_count != null && Object.hasOwnProperty.call(message, "instance_count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.instance_count);
                if (message.api_name != null && Object.hasOwnProperty.call(message, "api_name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.api_name);
                if (message.num_of_gunicorn_workers_per_instance != null && Object.hasOwnProperty.call(message, "num_of_gunicorn_workers_per_instance"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.num_of_gunicorn_workers_per_instance);
                if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.timeout);
                if (message.data_capture_s3_prefix != null && Object.hasOwnProperty.call(message, "data_capture_s3_prefix"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.data_capture_s3_prefix);
                if (message.data_capture_sample_percent != null && Object.hasOwnProperty.call(message, "data_capture_sample_percent"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.data_capture_sample_percent);
                return writer;
            };

            /**
             * Encodes the specified SageMakerOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.SageMakerOperatorConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.ISageMakerOperatorConfig} message SageMakerOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SageMakerOperatorConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SageMakerOperatorConfig message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.DeploymentSpec.SageMakerOperatorConfig} SageMakerOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SageMakerOperatorConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec.SageMakerOperatorConfig();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.region = reader.string();
                        break;
                    case 2:
                        message.instance_type = reader.string();
                        break;
                    case 3:
                        message.instance_count = reader.int32();
                        break;
                    case 4:
                        message.api_name = reader.string();
                        break;
                    case 5:
                        message.num_of_gunicorn_workers_per_instance = reader.int32();
                        break;
                    case 6:
                        message.timeout = reader.int32();
                        break;
                    case 7:
                        message.data_capture_s3_prefix = reader.string();
                        break;
                    case 8:
                        message.data_capture_sample_percent = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SageMakerOperatorConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.DeploymentSpec.SageMakerOperatorConfig} SageMakerOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SageMakerOperatorConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SageMakerOperatorConfig message.
             * @function verify
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SageMakerOperatorConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.region != null && message.hasOwnProperty("region"))
                    if (!$util.isString(message.region))
                        return "region: string expected";
                if (message.instance_type != null && message.hasOwnProperty("instance_type"))
                    if (!$util.isString(message.instance_type))
                        return "instance_type: string expected";
                if (message.instance_count != null && message.hasOwnProperty("instance_count"))
                    if (!$util.isInteger(message.instance_count))
                        return "instance_count: integer expected";
                if (message.api_name != null && message.hasOwnProperty("api_name"))
                    if (!$util.isString(message.api_name))
                        return "api_name: string expected";
                if (message.num_of_gunicorn_workers_per_instance != null && message.hasOwnProperty("num_of_gunicorn_workers_per_instance"))
                    if (!$util.isInteger(message.num_of_gunicorn_workers_per_instance))
                        return "num_of_gunicorn_workers_per_instance: integer expected";
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    if (!$util.isInteger(message.timeout))
                        return "timeout: integer expected";
                if (message.data_capture_s3_prefix != null && message.hasOwnProperty("data_capture_s3_prefix"))
                    if (!$util.isString(message.data_capture_s3_prefix))
                        return "data_capture_s3_prefix: string expected";
                if (message.data_capture_sample_percent != null && message.hasOwnProperty("data_capture_sample_percent"))
                    if (!$util.isInteger(message.data_capture_sample_percent))
                        return "data_capture_sample_percent: integer expected";
                return null;
            };

            /**
             * Creates a SageMakerOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.DeploymentSpec.SageMakerOperatorConfig} SageMakerOperatorConfig
             */
            SageMakerOperatorConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.DeploymentSpec.SageMakerOperatorConfig)
                    return object;
                let message = new $root.kappa.DeploymentSpec.SageMakerOperatorConfig();
                if (object.region != null)
                    message.region = String(object.region);
                if (object.instance_type != null)
                    message.instance_type = String(object.instance_type);
                if (object.instance_count != null)
                    message.instance_count = object.instance_count | 0;
                if (object.api_name != null)
                    message.api_name = String(object.api_name);
                if (object.num_of_gunicorn_workers_per_instance != null)
                    message.num_of_gunicorn_workers_per_instance = object.num_of_gunicorn_workers_per_instance | 0;
                if (object.timeout != null)
                    message.timeout = object.timeout | 0;
                if (object.data_capture_s3_prefix != null)
                    message.data_capture_s3_prefix = String(object.data_capture_s3_prefix);
                if (object.data_capture_sample_percent != null)
                    message.data_capture_sample_percent = object.data_capture_sample_percent | 0;
                return message;
            };

            /**
             * Creates a plain object from a SageMakerOperatorConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.SageMakerOperatorConfig} message SageMakerOperatorConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SageMakerOperatorConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.region = "";
                    object.instance_type = "";
                    object.instance_count = 0;
                    object.api_name = "";
                    object.num_of_gunicorn_workers_per_instance = 0;
                    object.timeout = 0;
                    object.data_capture_s3_prefix = "";
                    object.data_capture_sample_percent = 0;
                }
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = message.region;
                if (message.instance_type != null && message.hasOwnProperty("instance_type"))
                    object.instance_type = message.instance_type;
                if (message.instance_count != null && message.hasOwnProperty("instance_count"))
                    object.instance_count = message.instance_count;
                if (message.api_name != null && message.hasOwnProperty("api_name"))
                    object.api_name = message.api_name;
                if (message.num_of_gunicorn_workers_per_instance != null && message.hasOwnProperty("num_of_gunicorn_workers_per_instance"))
                    object.num_of_gunicorn_workers_per_instance = message.num_of_gunicorn_workers_per_instance;
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    object.timeout = message.timeout;
                if (message.data_capture_s3_prefix != null && message.hasOwnProperty("data_capture_s3_prefix"))
                    object.data_capture_s3_prefix = message.data_capture_s3_prefix;
                if (message.data_capture_sample_percent != null && message.hasOwnProperty("data_capture_sample_percent"))
                    object.data_capture_sample_percent = message.data_capture_sample_percent;
                return object;
            };

            /**
             * Converts this SageMakerOperatorConfig to JSON.
             * @function toJSON
             * @memberof kappa.DeploymentSpec.SageMakerOperatorConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SageMakerOperatorConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SageMakerOperatorConfig;
        })();

        DeploymentSpec.AwsLambdaOperatorConfig = (function() {

            /**
             * Properties of an AwsLambdaOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @interface IAwsLambdaOperatorConfig
             * @property {string|null} [region] AwsLambdaOperatorConfig region
             * @property {string|null} [api_name] AwsLambdaOperatorConfig api_name
             * @property {number|null} [memory_size] AwsLambdaOperatorConfig memory_size
             * @property {number|null} [timeout] AwsLambdaOperatorConfig timeout
             */

            /**
             * Constructs a new AwsLambdaOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @classdesc Represents an AwsLambdaOperatorConfig.
             * @implements IAwsLambdaOperatorConfig
             * @constructor
             * @param {kappa.DeploymentSpec.IAwsLambdaOperatorConfig=} [properties] Properties to set
             */
            function AwsLambdaOperatorConfig(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AwsLambdaOperatorConfig region.
             * @member {string} region
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @instance
             */
            AwsLambdaOperatorConfig.prototype.region = "";

            /**
             * AwsLambdaOperatorConfig api_name.
             * @member {string} api_name
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @instance
             */
            AwsLambdaOperatorConfig.prototype.api_name = "";

            /**
             * AwsLambdaOperatorConfig memory_size.
             * @member {number} memory_size
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @instance
             */
            AwsLambdaOperatorConfig.prototype.memory_size = 0;

            /**
             * AwsLambdaOperatorConfig timeout.
             * @member {number} timeout
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @instance
             */
            AwsLambdaOperatorConfig.prototype.timeout = 0;

            /**
             * Creates a new AwsLambdaOperatorConfig instance using the specified properties.
             * @function create
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsLambdaOperatorConfig=} [properties] Properties to set
             * @returns {kappa.DeploymentSpec.AwsLambdaOperatorConfig} AwsLambdaOperatorConfig instance
             */
            AwsLambdaOperatorConfig.create = function create(properties) {
                return new AwsLambdaOperatorConfig(properties);
            };

            /**
             * Encodes the specified AwsLambdaOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AwsLambdaOperatorConfig.verify|verify} messages.
             * @function encode
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsLambdaOperatorConfig} message AwsLambdaOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AwsLambdaOperatorConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.region);
                if (message.api_name != null && Object.hasOwnProperty.call(message, "api_name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.api_name);
                if (message.memory_size != null && Object.hasOwnProperty.call(message, "memory_size"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.memory_size);
                if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeout);
                return writer;
            };

            /**
             * Encodes the specified AwsLambdaOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AwsLambdaOperatorConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsLambdaOperatorConfig} message AwsLambdaOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AwsLambdaOperatorConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AwsLambdaOperatorConfig message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.DeploymentSpec.AwsLambdaOperatorConfig} AwsLambdaOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AwsLambdaOperatorConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.region = reader.string();
                        break;
                    case 2:
                        message.api_name = reader.string();
                        break;
                    case 3:
                        message.memory_size = reader.int32();
                        break;
                    case 4:
                        message.timeout = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AwsLambdaOperatorConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.DeploymentSpec.AwsLambdaOperatorConfig} AwsLambdaOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AwsLambdaOperatorConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AwsLambdaOperatorConfig message.
             * @function verify
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AwsLambdaOperatorConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.region != null && message.hasOwnProperty("region"))
                    if (!$util.isString(message.region))
                        return "region: string expected";
                if (message.api_name != null && message.hasOwnProperty("api_name"))
                    if (!$util.isString(message.api_name))
                        return "api_name: string expected";
                if (message.memory_size != null && message.hasOwnProperty("memory_size"))
                    if (!$util.isInteger(message.memory_size))
                        return "memory_size: integer expected";
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    if (!$util.isInteger(message.timeout))
                        return "timeout: integer expected";
                return null;
            };

            /**
             * Creates an AwsLambdaOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.DeploymentSpec.AwsLambdaOperatorConfig} AwsLambdaOperatorConfig
             */
            AwsLambdaOperatorConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig)
                    return object;
                let message = new $root.kappa.DeploymentSpec.AwsLambdaOperatorConfig();
                if (object.region != null)
                    message.region = String(object.region);
                if (object.api_name != null)
                    message.api_name = String(object.api_name);
                if (object.memory_size != null)
                    message.memory_size = object.memory_size | 0;
                if (object.timeout != null)
                    message.timeout = object.timeout | 0;
                return message;
            };

            /**
             * Creates a plain object from an AwsLambdaOperatorConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.AwsLambdaOperatorConfig} message AwsLambdaOperatorConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AwsLambdaOperatorConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.region = "";
                    object.api_name = "";
                    object.memory_size = 0;
                    object.timeout = 0;
                }
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = message.region;
                if (message.api_name != null && message.hasOwnProperty("api_name"))
                    object.api_name = message.api_name;
                if (message.memory_size != null && message.hasOwnProperty("memory_size"))
                    object.memory_size = message.memory_size;
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    object.timeout = message.timeout;
                return object;
            };

            /**
             * Converts this AwsLambdaOperatorConfig to JSON.
             * @function toJSON
             * @memberof kappa.DeploymentSpec.AwsLambdaOperatorConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AwsLambdaOperatorConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AwsLambdaOperatorConfig;
        })();

        DeploymentSpec.AzureFunctionsOperatorConfig = (function() {

            /**
             * Properties of an AzureFunctionsOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @interface IAzureFunctionsOperatorConfig
             * @property {string|null} [location] AzureFunctionsOperatorConfig location
             * @property {string|null} [premium_plan_sku] AzureFunctionsOperatorConfig premium_plan_sku
             * @property {number|null} [min_instances] AzureFunctionsOperatorConfig min_instances
             * @property {number|null} [max_burst] AzureFunctionsOperatorConfig max_burst
             * @property {string|null} [function_auth_level] AzureFunctionsOperatorConfig function_auth_level
             */

            /**
             * Constructs a new AzureFunctionsOperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @classdesc Represents an AzureFunctionsOperatorConfig.
             * @implements IAzureFunctionsOperatorConfig
             * @constructor
             * @param {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig=} [properties] Properties to set
             */
            function AzureFunctionsOperatorConfig(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AzureFunctionsOperatorConfig location.
             * @member {string} location
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             */
            AzureFunctionsOperatorConfig.prototype.location = "";

            /**
             * AzureFunctionsOperatorConfig premium_plan_sku.
             * @member {string} premium_plan_sku
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             */
            AzureFunctionsOperatorConfig.prototype.premium_plan_sku = "";

            /**
             * AzureFunctionsOperatorConfig min_instances.
             * @member {number} min_instances
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             */
            AzureFunctionsOperatorConfig.prototype.min_instances = 0;

            /**
             * AzureFunctionsOperatorConfig max_burst.
             * @member {number} max_burst
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             */
            AzureFunctionsOperatorConfig.prototype.max_burst = 0;

            /**
             * AzureFunctionsOperatorConfig function_auth_level.
             * @member {string} function_auth_level
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             */
            AzureFunctionsOperatorConfig.prototype.function_auth_level = "";

            /**
             * Creates a new AzureFunctionsOperatorConfig instance using the specified properties.
             * @function create
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig=} [properties] Properties to set
             * @returns {kappa.DeploymentSpec.AzureFunctionsOperatorConfig} AzureFunctionsOperatorConfig instance
             */
            AzureFunctionsOperatorConfig.create = function create(properties) {
                return new AzureFunctionsOperatorConfig(properties);
            };

            /**
             * Encodes the specified AzureFunctionsOperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AzureFunctionsOperatorConfig.verify|verify} messages.
             * @function encode
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig} message AzureFunctionsOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AzureFunctionsOperatorConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.location);
                if (message.premium_plan_sku != null && Object.hasOwnProperty.call(message, "premium_plan_sku"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.premium_plan_sku);
                if (message.min_instances != null && Object.hasOwnProperty.call(message, "min_instances"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.min_instances);
                if (message.max_burst != null && Object.hasOwnProperty.call(message, "max_burst"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.max_burst);
                if (message.function_auth_level != null && Object.hasOwnProperty.call(message, "function_auth_level"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.function_auth_level);
                return writer;
            };

            /**
             * Encodes the specified AzureFunctionsOperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AzureFunctionsOperatorConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAzureFunctionsOperatorConfig} message AzureFunctionsOperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AzureFunctionsOperatorConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AzureFunctionsOperatorConfig message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.DeploymentSpec.AzureFunctionsOperatorConfig} AzureFunctionsOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AzureFunctionsOperatorConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.location = reader.string();
                        break;
                    case 2:
                        message.premium_plan_sku = reader.string();
                        break;
                    case 3:
                        message.min_instances = reader.int32();
                        break;
                    case 4:
                        message.max_burst = reader.int32();
                        break;
                    case 5:
                        message.function_auth_level = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AzureFunctionsOperatorConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.DeploymentSpec.AzureFunctionsOperatorConfig} AzureFunctionsOperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AzureFunctionsOperatorConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AzureFunctionsOperatorConfig message.
             * @function verify
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AzureFunctionsOperatorConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location"))
                    if (!$util.isString(message.location))
                        return "location: string expected";
                if (message.premium_plan_sku != null && message.hasOwnProperty("premium_plan_sku"))
                    if (!$util.isString(message.premium_plan_sku))
                        return "premium_plan_sku: string expected";
                if (message.min_instances != null && message.hasOwnProperty("min_instances"))
                    if (!$util.isInteger(message.min_instances))
                        return "min_instances: integer expected";
                if (message.max_burst != null && message.hasOwnProperty("max_burst"))
                    if (!$util.isInteger(message.max_burst))
                        return "max_burst: integer expected";
                if (message.function_auth_level != null && message.hasOwnProperty("function_auth_level"))
                    if (!$util.isString(message.function_auth_level))
                        return "function_auth_level: string expected";
                return null;
            };

            /**
             * Creates an AzureFunctionsOperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.DeploymentSpec.AzureFunctionsOperatorConfig} AzureFunctionsOperatorConfig
             */
            AzureFunctionsOperatorConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig)
                    return object;
                let message = new $root.kappa.DeploymentSpec.AzureFunctionsOperatorConfig();
                if (object.location != null)
                    message.location = String(object.location);
                if (object.premium_plan_sku != null)
                    message.premium_plan_sku = String(object.premium_plan_sku);
                if (object.min_instances != null)
                    message.min_instances = object.min_instances | 0;
                if (object.max_burst != null)
                    message.max_burst = object.max_burst | 0;
                if (object.function_auth_level != null)
                    message.function_auth_level = String(object.function_auth_level);
                return message;
            };

            /**
             * Creates a plain object from an AzureFunctionsOperatorConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.AzureFunctionsOperatorConfig} message AzureFunctionsOperatorConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AzureFunctionsOperatorConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.location = "";
                    object.premium_plan_sku = "";
                    object.min_instances = 0;
                    object.max_burst = 0;
                    object.function_auth_level = "";
                }
                if (message.location != null && message.hasOwnProperty("location"))
                    object.location = message.location;
                if (message.premium_plan_sku != null && message.hasOwnProperty("premium_plan_sku"))
                    object.premium_plan_sku = message.premium_plan_sku;
                if (message.min_instances != null && message.hasOwnProperty("min_instances"))
                    object.min_instances = message.min_instances;
                if (message.max_burst != null && message.hasOwnProperty("max_burst"))
                    object.max_burst = message.max_burst;
                if (message.function_auth_level != null && message.hasOwnProperty("function_auth_level"))
                    object.function_auth_level = message.function_auth_level;
                return object;
            };

            /**
             * Converts this AzureFunctionsOperatorConfig to JSON.
             * @function toJSON
             * @memberof kappa.DeploymentSpec.AzureFunctionsOperatorConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AzureFunctionsOperatorConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AzureFunctionsOperatorConfig;
        })();

        DeploymentSpec.AwsEc2OperatorConfig = (function() {

            /**
             * Properties of an AwsEc2OperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @interface IAwsEc2OperatorConfig
             * @property {string|null} [region] AwsEc2OperatorConfig region
             * @property {string|null} [instance_type] AwsEc2OperatorConfig instance_type
             * @property {string|null} [ami_id] AwsEc2OperatorConfig ami_id
             * @property {number|null} [autoscale_min_size] AwsEc2OperatorConfig autoscale_min_size
             * @property {number|null} [autoscale_desired_capacity] AwsEc2OperatorConfig autoscale_desired_capacity
             * @property {number|null} [autoscale_max_size] AwsEc2OperatorConfig autoscale_max_size
             */

            /**
             * Constructs a new AwsEc2OperatorConfig.
             * @memberof kappa.DeploymentSpec
             * @classdesc Represents an AwsEc2OperatorConfig.
             * @implements IAwsEc2OperatorConfig
             * @constructor
             * @param {kappa.DeploymentSpec.IAwsEc2OperatorConfig=} [properties] Properties to set
             */
            function AwsEc2OperatorConfig(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AwsEc2OperatorConfig region.
             * @member {string} region
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.region = "";

            /**
             * AwsEc2OperatorConfig instance_type.
             * @member {string} instance_type
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.instance_type = "";

            /**
             * AwsEc2OperatorConfig ami_id.
             * @member {string} ami_id
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.ami_id = "";

            /**
             * AwsEc2OperatorConfig autoscale_min_size.
             * @member {number} autoscale_min_size
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.autoscale_min_size = 0;

            /**
             * AwsEc2OperatorConfig autoscale_desired_capacity.
             * @member {number} autoscale_desired_capacity
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.autoscale_desired_capacity = 0;

            /**
             * AwsEc2OperatorConfig autoscale_max_size.
             * @member {number} autoscale_max_size
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             */
            AwsEc2OperatorConfig.prototype.autoscale_max_size = 0;

            /**
             * Creates a new AwsEc2OperatorConfig instance using the specified properties.
             * @function create
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsEc2OperatorConfig=} [properties] Properties to set
             * @returns {kappa.DeploymentSpec.AwsEc2OperatorConfig} AwsEc2OperatorConfig instance
             */
            AwsEc2OperatorConfig.create = function create(properties) {
                return new AwsEc2OperatorConfig(properties);
            };

            /**
             * Encodes the specified AwsEc2OperatorConfig message. Does not implicitly {@link kappa.DeploymentSpec.AwsEc2OperatorConfig.verify|verify} messages.
             * @function encode
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsEc2OperatorConfig} message AwsEc2OperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AwsEc2OperatorConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.region);
                if (message.instance_type != null && Object.hasOwnProperty.call(message, "instance_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.instance_type);
                if (message.ami_id != null && Object.hasOwnProperty.call(message, "ami_id"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.ami_id);
                if (message.autoscale_min_size != null && Object.hasOwnProperty.call(message, "autoscale_min_size"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.autoscale_min_size);
                if (message.autoscale_desired_capacity != null && Object.hasOwnProperty.call(message, "autoscale_desired_capacity"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.autoscale_desired_capacity);
                if (message.autoscale_max_size != null && Object.hasOwnProperty.call(message, "autoscale_max_size"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.autoscale_max_size);
                return writer;
            };

            /**
             * Encodes the specified AwsEc2OperatorConfig message, length delimited. Does not implicitly {@link kappa.DeploymentSpec.AwsEc2OperatorConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.IAwsEc2OperatorConfig} message AwsEc2OperatorConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AwsEc2OperatorConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AwsEc2OperatorConfig message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.DeploymentSpec.AwsEc2OperatorConfig} AwsEc2OperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AwsEc2OperatorConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentSpec.AwsEc2OperatorConfig();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.region = reader.string();
                        break;
                    case 2:
                        message.instance_type = reader.string();
                        break;
                    case 6:
                        message.ami_id = reader.string();
                        break;
                    case 7:
                        message.autoscale_min_size = reader.int32();
                        break;
                    case 8:
                        message.autoscale_desired_capacity = reader.int32();
                        break;
                    case 9:
                        message.autoscale_max_size = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AwsEc2OperatorConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.DeploymentSpec.AwsEc2OperatorConfig} AwsEc2OperatorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AwsEc2OperatorConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AwsEc2OperatorConfig message.
             * @function verify
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AwsEc2OperatorConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.region != null && message.hasOwnProperty("region"))
                    if (!$util.isString(message.region))
                        return "region: string expected";
                if (message.instance_type != null && message.hasOwnProperty("instance_type"))
                    if (!$util.isString(message.instance_type))
                        return "instance_type: string expected";
                if (message.ami_id != null && message.hasOwnProperty("ami_id"))
                    if (!$util.isString(message.ami_id))
                        return "ami_id: string expected";
                if (message.autoscale_min_size != null && message.hasOwnProperty("autoscale_min_size"))
                    if (!$util.isInteger(message.autoscale_min_size))
                        return "autoscale_min_size: integer expected";
                if (message.autoscale_desired_capacity != null && message.hasOwnProperty("autoscale_desired_capacity"))
                    if (!$util.isInteger(message.autoscale_desired_capacity))
                        return "autoscale_desired_capacity: integer expected";
                if (message.autoscale_max_size != null && message.hasOwnProperty("autoscale_max_size"))
                    if (!$util.isInteger(message.autoscale_max_size))
                        return "autoscale_max_size: integer expected";
                return null;
            };

            /**
             * Creates an AwsEc2OperatorConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.DeploymentSpec.AwsEc2OperatorConfig} AwsEc2OperatorConfig
             */
            AwsEc2OperatorConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.DeploymentSpec.AwsEc2OperatorConfig)
                    return object;
                let message = new $root.kappa.DeploymentSpec.AwsEc2OperatorConfig();
                if (object.region != null)
                    message.region = String(object.region);
                if (object.instance_type != null)
                    message.instance_type = String(object.instance_type);
                if (object.ami_id != null)
                    message.ami_id = String(object.ami_id);
                if (object.autoscale_min_size != null)
                    message.autoscale_min_size = object.autoscale_min_size | 0;
                if (object.autoscale_desired_capacity != null)
                    message.autoscale_desired_capacity = object.autoscale_desired_capacity | 0;
                if (object.autoscale_max_size != null)
                    message.autoscale_max_size = object.autoscale_max_size | 0;
                return message;
            };

            /**
             * Creates a plain object from an AwsEc2OperatorConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @static
             * @param {kappa.DeploymentSpec.AwsEc2OperatorConfig} message AwsEc2OperatorConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AwsEc2OperatorConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.region = "";
                    object.instance_type = "";
                    object.ami_id = "";
                    object.autoscale_min_size = 0;
                    object.autoscale_desired_capacity = 0;
                    object.autoscale_max_size = 0;
                }
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = message.region;
                if (message.instance_type != null && message.hasOwnProperty("instance_type"))
                    object.instance_type = message.instance_type;
                if (message.ami_id != null && message.hasOwnProperty("ami_id"))
                    object.ami_id = message.ami_id;
                if (message.autoscale_min_size != null && message.hasOwnProperty("autoscale_min_size"))
                    object.autoscale_min_size = message.autoscale_min_size;
                if (message.autoscale_desired_capacity != null && message.hasOwnProperty("autoscale_desired_capacity"))
                    object.autoscale_desired_capacity = message.autoscale_desired_capacity;
                if (message.autoscale_max_size != null && message.hasOwnProperty("autoscale_max_size"))
                    object.autoscale_max_size = message.autoscale_max_size;
                return object;
            };

            /**
             * Converts this AwsEc2OperatorConfig to JSON.
             * @function toJSON
             * @memberof kappa.DeploymentSpec.AwsEc2OperatorConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AwsEc2OperatorConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AwsEc2OperatorConfig;
        })();

        return DeploymentSpec;
    })();

    kappa.DeploymentState = (function() {

        /**
         * Properties of a DeploymentState.
         * @memberof kappa
         * @interface IDeploymentState
         * @property {kappa.DeploymentState.State|null} [state] DeploymentState state
         * @property {string|null} [error_message] DeploymentState error_message
         * @property {string|null} [info_json] DeploymentState info_json
         * @property {google.protobuf.ITimestamp|null} [timestamp] DeploymentState timestamp
         */

        /**
         * Constructs a new DeploymentState.
         * @memberof kappa
         * @classdesc Represents a DeploymentState.
         * @implements IDeploymentState
         * @constructor
         * @param {kappa.IDeploymentState=} [properties] Properties to set
         */
        function DeploymentState(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeploymentState state.
         * @member {kappa.DeploymentState.State} state
         * @memberof kappa.DeploymentState
         * @instance
         */
        DeploymentState.prototype.state = 0;

        /**
         * DeploymentState error_message.
         * @member {string} error_message
         * @memberof kappa.DeploymentState
         * @instance
         */
        DeploymentState.prototype.error_message = "";

        /**
         * DeploymentState info_json.
         * @member {string} info_json
         * @memberof kappa.DeploymentState
         * @instance
         */
        DeploymentState.prototype.info_json = "";

        /**
         * DeploymentState timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof kappa.DeploymentState
         * @instance
         */
        DeploymentState.prototype.timestamp = null;

        /**
         * Creates a new DeploymentState instance using the specified properties.
         * @function create
         * @memberof kappa.DeploymentState
         * @static
         * @param {kappa.IDeploymentState=} [properties] Properties to set
         * @returns {kappa.DeploymentState} DeploymentState instance
         */
        DeploymentState.create = function create(properties) {
            return new DeploymentState(properties);
        };

        /**
         * Encodes the specified DeploymentState message. Does not implicitly {@link kappa.DeploymentState.verify|verify} messages.
         * @function encode
         * @memberof kappa.DeploymentState
         * @static
         * @param {kappa.IDeploymentState} message DeploymentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.error_message);
            if (message.info_json != null && Object.hasOwnProperty.call(message, "info_json"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.info_json);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeploymentState message, length delimited. Does not implicitly {@link kappa.DeploymentState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DeploymentState
         * @static
         * @param {kappa.IDeploymentState} message DeploymentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeploymentState message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DeploymentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DeploymentState} DeploymentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.error_message = reader.string();
                    break;
                case 3:
                    message.info_json = reader.string();
                    break;
                case 4:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeploymentState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DeploymentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DeploymentState} DeploymentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeploymentState message.
         * @function verify
         * @memberof kappa.DeploymentState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeploymentState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            if (message.info_json != null && message.hasOwnProperty("info_json"))
                if (!$util.isString(message.info_json))
                    return "info_json: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            return null;
        };

        /**
         * Creates a DeploymentState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DeploymentState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DeploymentState} DeploymentState
         */
        DeploymentState.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DeploymentState)
                return object;
            let message = new $root.kappa.DeploymentState();
            switch (object.state) {
            case "PENDING":
            case 0:
                message.state = 0;
                break;
            case "RUNNING":
            case 1:
                message.state = 1;
                break;
            case "SUCCEEDED":
            case 2:
                message.state = 2;
                break;
            case "FAILED":
            case 3:
                message.state = 3;
                break;
            case "UNKNOWN":
            case 4:
                message.state = 4;
                break;
            case "COMPLETED":
            case 5:
                message.state = 5;
                break;
            case "CRASH_LOOP_BACK_OFF":
            case 6:
                message.state = 6;
                break;
            case "ERROR":
            case 7:
                message.state = 7;
                break;
            case "INACTIVATED":
            case 8:
                message.state = 8;
                break;
            }
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            if (object.info_json != null)
                message.info_json = String(object.info_json);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".kappa.DeploymentState.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeploymentState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DeploymentState
         * @static
         * @param {kappa.DeploymentState} message DeploymentState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeploymentState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.state = options.enums === String ? "PENDING" : 0;
                object.error_message = "";
                object.info_json = "";
                object.timestamp = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.kappa.DeploymentState.State[message.state] : message.state;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            if (message.info_json != null && message.hasOwnProperty("info_json"))
                object.info_json = message.info_json;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            return object;
        };

        /**
         * Converts this DeploymentState to JSON.
         * @function toJSON
         * @memberof kappa.DeploymentState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeploymentState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * State enum.
         * @name kappa.DeploymentState.State
         * @enum {number}
         * @property {number} PENDING=0 PENDING value
         * @property {number} RUNNING=1 RUNNING value
         * @property {number} SUCCEEDED=2 SUCCEEDED value
         * @property {number} FAILED=3 FAILED value
         * @property {number} UNKNOWN=4 UNKNOWN value
         * @property {number} COMPLETED=5 COMPLETED value
         * @property {number} CRASH_LOOP_BACK_OFF=6 CRASH_LOOP_BACK_OFF value
         * @property {number} ERROR=7 ERROR value
         * @property {number} INACTIVATED=8 INACTIVATED value
         */
        DeploymentState.State = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PENDING"] = 0;
            values[valuesById[1] = "RUNNING"] = 1;
            values[valuesById[2] = "SUCCEEDED"] = 2;
            values[valuesById[3] = "FAILED"] = 3;
            values[valuesById[4] = "UNKNOWN"] = 4;
            values[valuesById[5] = "COMPLETED"] = 5;
            values[valuesById[6] = "CRASH_LOOP_BACK_OFF"] = 6;
            values[valuesById[7] = "ERROR"] = 7;
            values[valuesById[8] = "INACTIVATED"] = 8;
            return values;
        })();

        return DeploymentState;
    })();

    kappa.Deployment = (function() {

        /**
         * Properties of a Deployment.
         * @memberof kappa
         * @interface IDeployment
         * @property {string|null} [namespace] Deployment namespace
         * @property {string|null} [name] Deployment name
         * @property {kappa.IDeploymentSpec|null} [spec] Deployment spec
         * @property {kappa.IDeploymentState|null} [state] Deployment state
         * @property {Object.<string,string>|null} [annotations] Deployment annotations
         * @property {Object.<string,string>|null} [labels] Deployment labels
         * @property {google.protobuf.ITimestamp|null} [created_at] Deployment created_at
         * @property {google.protobuf.ITimestamp|null} [last_updated_at] Deployment last_updated_at
         */

        /**
         * Constructs a new Deployment.
         * @memberof kappa
         * @classdesc Represents a Deployment.
         * @implements IDeployment
         * @constructor
         * @param {kappa.IDeployment=} [properties] Properties to set
         */
        function Deployment(properties) {
            this.annotations = {};
            this.labels = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Deployment namespace.
         * @member {string} namespace
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.namespace = "";

        /**
         * Deployment name.
         * @member {string} name
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.name = "";

        /**
         * Deployment spec.
         * @member {kappa.IDeploymentSpec|null|undefined} spec
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.spec = null;

        /**
         * Deployment state.
         * @member {kappa.IDeploymentState|null|undefined} state
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.state = null;

        /**
         * Deployment annotations.
         * @member {Object.<string,string>} annotations
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.annotations = $util.emptyObject;

        /**
         * Deployment labels.
         * @member {Object.<string,string>} labels
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.labels = $util.emptyObject;

        /**
         * Deployment created_at.
         * @member {google.protobuf.ITimestamp|null|undefined} created_at
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.created_at = null;

        /**
         * Deployment last_updated_at.
         * @member {google.protobuf.ITimestamp|null|undefined} last_updated_at
         * @memberof kappa.Deployment
         * @instance
         */
        Deployment.prototype.last_updated_at = null;

        /**
         * Creates a new Deployment instance using the specified properties.
         * @function create
         * @memberof kappa.Deployment
         * @static
         * @param {kappa.IDeployment=} [properties] Properties to set
         * @returns {kappa.Deployment} Deployment instance
         */
        Deployment.create = function create(properties) {
            return new Deployment(properties);
        };

        /**
         * Encodes the specified Deployment message. Does not implicitly {@link kappa.Deployment.verify|verify} messages.
         * @function encode
         * @memberof kappa.Deployment
         * @static
         * @param {kappa.IDeployment} message Deployment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Deployment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.spec != null && Object.hasOwnProperty.call(message, "spec"))
                $root.kappa.DeploymentSpec.encode(message.spec, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                $root.kappa.DeploymentState.encode(message.state, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.annotations != null && Object.hasOwnProperty.call(message, "annotations"))
                for (let keys = Object.keys(message.annotations), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.annotations[keys[i]]).ldelim();
            if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                for (let keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.last_updated_at != null && Object.hasOwnProperty.call(message, "last_updated_at"))
                $root.google.protobuf.Timestamp.encode(message.last_updated_at, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Deployment message, length delimited. Does not implicitly {@link kappa.Deployment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.Deployment
         * @static
         * @param {kappa.IDeployment} message Deployment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Deployment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Deployment message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.Deployment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.Deployment} Deployment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Deployment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.Deployment(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.namespace = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.spec = $root.kappa.DeploymentSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.state = $root.kappa.DeploymentState.decode(reader, reader.uint32());
                    break;
                case 5:
                    reader.skip().pos++;
                    if (message.annotations === $util.emptyObject)
                        message.annotations = {};
                    key = reader.string();
                    reader.pos++;
                    message.annotations[key] = reader.string();
                    break;
                case 6:
                    reader.skip().pos++;
                    if (message.labels === $util.emptyObject)
                        message.labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.labels[key] = reader.string();
                    break;
                case 7:
                    message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.last_updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Deployment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.Deployment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.Deployment} Deployment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Deployment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Deployment message.
         * @function verify
         * @memberof kappa.Deployment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Deployment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.spec != null && message.hasOwnProperty("spec")) {
                let error = $root.kappa.DeploymentSpec.verify(message.spec);
                if (error)
                    return "spec." + error;
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                let error = $root.kappa.DeploymentState.verify(message.state);
                if (error)
                    return "state." + error;
            }
            if (message.annotations != null && message.hasOwnProperty("annotations")) {
                if (!$util.isObject(message.annotations))
                    return "annotations: object expected";
                let key = Object.keys(message.annotations);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.annotations[key[i]]))
                        return "annotations: string{k:string} expected";
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!$util.isObject(message.labels))
                    return "labels: object expected";
                let key = Object.keys(message.labels);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.labels[key[i]]))
                        return "labels: string{k:string} expected";
            }
            if (message.created_at != null && message.hasOwnProperty("created_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                if (error)
                    return "created_at." + error;
            }
            if (message.last_updated_at != null && message.hasOwnProperty("last_updated_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.last_updated_at);
                if (error)
                    return "last_updated_at." + error;
            }
            return null;
        };

        /**
         * Creates a Deployment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.Deployment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.Deployment} Deployment
         */
        Deployment.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.Deployment)
                return object;
            let message = new $root.kappa.Deployment();
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            if (object.name != null)
                message.name = String(object.name);
            if (object.spec != null) {
                if (typeof object.spec !== "object")
                    throw TypeError(".kappa.Deployment.spec: object expected");
                message.spec = $root.kappa.DeploymentSpec.fromObject(object.spec);
            }
            if (object.state != null) {
                if (typeof object.state !== "object")
                    throw TypeError(".kappa.Deployment.state: object expected");
                message.state = $root.kappa.DeploymentState.fromObject(object.state);
            }
            if (object.annotations) {
                if (typeof object.annotations !== "object")
                    throw TypeError(".kappa.Deployment.annotations: object expected");
                message.annotations = {};
                for (let keys = Object.keys(object.annotations), i = 0; i < keys.length; ++i)
                    message.annotations[keys[i]] = String(object.annotations[keys[i]]);
            }
            if (object.labels) {
                if (typeof object.labels !== "object")
                    throw TypeError(".kappa.Deployment.labels: object expected");
                message.labels = {};
                for (let keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                    message.labels[keys[i]] = String(object.labels[keys[i]]);
            }
            if (object.created_at != null) {
                if (typeof object.created_at !== "object")
                    throw TypeError(".kappa.Deployment.created_at: object expected");
                message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
            }
            if (object.last_updated_at != null) {
                if (typeof object.last_updated_at !== "object")
                    throw TypeError(".kappa.Deployment.last_updated_at: object expected");
                message.last_updated_at = $root.google.protobuf.Timestamp.fromObject(object.last_updated_at);
            }
            return message;
        };

        /**
         * Creates a plain object from a Deployment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.Deployment
         * @static
         * @param {kappa.Deployment} message Deployment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Deployment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults) {
                object.annotations = {};
                object.labels = {};
            }
            if (options.defaults) {
                object.namespace = "";
                object.name = "";
                object.spec = null;
                object.state = null;
                object.created_at = null;
                object.last_updated_at = null;
            }
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.spec != null && message.hasOwnProperty("spec"))
                object.spec = $root.kappa.DeploymentSpec.toObject(message.spec, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = $root.kappa.DeploymentState.toObject(message.state, options);
            let keys2;
            if (message.annotations && (keys2 = Object.keys(message.annotations)).length) {
                object.annotations = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.annotations[keys2[j]] = message.annotations[keys2[j]];
            }
            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                object.labels = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.labels[keys2[j]] = message.labels[keys2[j]];
            }
            if (message.created_at != null && message.hasOwnProperty("created_at"))
                object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
            if (message.last_updated_at != null && message.hasOwnProperty("last_updated_at"))
                object.last_updated_at = $root.google.protobuf.Timestamp.toObject(message.last_updated_at, options);
            return object;
        };

        /**
         * Converts this Deployment to JSON.
         * @function toJSON
         * @memberof kappa.Deployment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Deployment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Deployment;
    })();

    kappa.DeploymentStatus = (function() {

        /**
         * Properties of a DeploymentStatus.
         * @memberof kappa
         * @interface IDeploymentStatus
         * @property {kappa.IDeploymentState|null} [state] DeploymentStatus state
         */

        /**
         * Constructs a new DeploymentStatus.
         * @memberof kappa
         * @classdesc Represents a DeploymentStatus.
         * @implements IDeploymentStatus
         * @constructor
         * @param {kappa.IDeploymentStatus=} [properties] Properties to set
         */
        function DeploymentStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeploymentStatus state.
         * @member {kappa.IDeploymentState|null|undefined} state
         * @memberof kappa.DeploymentStatus
         * @instance
         */
        DeploymentStatus.prototype.state = null;

        /**
         * Creates a new DeploymentStatus instance using the specified properties.
         * @function create
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {kappa.IDeploymentStatus=} [properties] Properties to set
         * @returns {kappa.DeploymentStatus} DeploymentStatus instance
         */
        DeploymentStatus.create = function create(properties) {
            return new DeploymentStatus(properties);
        };

        /**
         * Encodes the specified DeploymentStatus message. Does not implicitly {@link kappa.DeploymentStatus.verify|verify} messages.
         * @function encode
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {kappa.IDeploymentStatus} message DeploymentStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                $root.kappa.DeploymentState.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeploymentStatus message, length delimited. Does not implicitly {@link kappa.DeploymentStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {kappa.IDeploymentStatus} message DeploymentStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeploymentStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeploymentStatus message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DeploymentStatus} DeploymentStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeploymentStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = $root.kappa.DeploymentState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeploymentStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DeploymentStatus} DeploymentStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeploymentStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeploymentStatus message.
         * @function verify
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeploymentStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state")) {
                let error = $root.kappa.DeploymentState.verify(message.state);
                if (error)
                    return "state." + error;
            }
            return null;
        };

        /**
         * Creates a DeploymentStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DeploymentStatus} DeploymentStatus
         */
        DeploymentStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DeploymentStatus)
                return object;
            let message = new $root.kappa.DeploymentStatus();
            if (object.state != null) {
                if (typeof object.state !== "object")
                    throw TypeError(".kappa.DeploymentStatus.state: object expected");
                message.state = $root.kappa.DeploymentState.fromObject(object.state);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeploymentStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DeploymentStatus
         * @static
         * @param {kappa.DeploymentStatus} message DeploymentStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeploymentStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.state = null;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = $root.kappa.DeploymentState.toObject(message.state, options);
            return object;
        };

        /**
         * Converts this DeploymentStatus to JSON.
         * @function toJSON
         * @memberof kappa.DeploymentStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeploymentStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeploymentStatus;
    })();

    kappa.ApplyDeploymentRequest = (function() {

        /**
         * Properties of an ApplyDeploymentRequest.
         * @memberof kappa
         * @interface IApplyDeploymentRequest
         * @property {kappa.IDeployment|null} [deployment] ApplyDeploymentRequest deployment
         */

        /**
         * Constructs a new ApplyDeploymentRequest.
         * @memberof kappa
         * @classdesc Represents an ApplyDeploymentRequest.
         * @implements IApplyDeploymentRequest
         * @constructor
         * @param {kappa.IApplyDeploymentRequest=} [properties] Properties to set
         */
        function ApplyDeploymentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyDeploymentRequest deployment.
         * @member {kappa.IDeployment|null|undefined} deployment
         * @memberof kappa.ApplyDeploymentRequest
         * @instance
         */
        ApplyDeploymentRequest.prototype.deployment = null;

        /**
         * Creates a new ApplyDeploymentRequest instance using the specified properties.
         * @function create
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {kappa.IApplyDeploymentRequest=} [properties] Properties to set
         * @returns {kappa.ApplyDeploymentRequest} ApplyDeploymentRequest instance
         */
        ApplyDeploymentRequest.create = function create(properties) {
            return new ApplyDeploymentRequest(properties);
        };

        /**
         * Encodes the specified ApplyDeploymentRequest message. Does not implicitly {@link kappa.ApplyDeploymentRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {kappa.IApplyDeploymentRequest} message ApplyDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDeploymentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deployment != null && Object.hasOwnProperty.call(message, "deployment"))
                $root.kappa.Deployment.encode(message.deployment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ApplyDeploymentRequest message, length delimited. Does not implicitly {@link kappa.ApplyDeploymentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {kappa.IApplyDeploymentRequest} message ApplyDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDeploymentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDeploymentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ApplyDeploymentRequest} ApplyDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDeploymentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ApplyDeploymentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deployment = $root.kappa.Deployment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApplyDeploymentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ApplyDeploymentRequest} ApplyDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDeploymentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDeploymentRequest message.
         * @function verify
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDeploymentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deployment != null && message.hasOwnProperty("deployment")) {
                let error = $root.kappa.Deployment.verify(message.deployment);
                if (error)
                    return "deployment." + error;
            }
            return null;
        };

        /**
         * Creates an ApplyDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ApplyDeploymentRequest} ApplyDeploymentRequest
         */
        ApplyDeploymentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ApplyDeploymentRequest)
                return object;
            let message = new $root.kappa.ApplyDeploymentRequest();
            if (object.deployment != null) {
                if (typeof object.deployment !== "object")
                    throw TypeError(".kappa.ApplyDeploymentRequest.deployment: object expected");
                message.deployment = $root.kappa.Deployment.fromObject(object.deployment);
            }
            return message;
        };

        /**
         * Creates a plain object from an ApplyDeploymentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ApplyDeploymentRequest
         * @static
         * @param {kappa.ApplyDeploymentRequest} message ApplyDeploymentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDeploymentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.deployment = null;
            if (message.deployment != null && message.hasOwnProperty("deployment"))
                object.deployment = $root.kappa.Deployment.toObject(message.deployment, options);
            return object;
        };

        /**
         * Converts this ApplyDeploymentRequest to JSON.
         * @function toJSON
         * @memberof kappa.ApplyDeploymentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDeploymentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApplyDeploymentRequest;
    })();

    kappa.ApplyDeploymentResponse = (function() {

        /**
         * Properties of an ApplyDeploymentResponse.
         * @memberof kappa
         * @interface IApplyDeploymentResponse
         * @property {kappa.IStatus|null} [status] ApplyDeploymentResponse status
         * @property {kappa.IDeployment|null} [deployment] ApplyDeploymentResponse deployment
         */

        /**
         * Constructs a new ApplyDeploymentResponse.
         * @memberof kappa
         * @classdesc Represents an ApplyDeploymentResponse.
         * @implements IApplyDeploymentResponse
         * @constructor
         * @param {kappa.IApplyDeploymentResponse=} [properties] Properties to set
         */
        function ApplyDeploymentResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyDeploymentResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.ApplyDeploymentResponse
         * @instance
         */
        ApplyDeploymentResponse.prototype.status = null;

        /**
         * ApplyDeploymentResponse deployment.
         * @member {kappa.IDeployment|null|undefined} deployment
         * @memberof kappa.ApplyDeploymentResponse
         * @instance
         */
        ApplyDeploymentResponse.prototype.deployment = null;

        /**
         * Creates a new ApplyDeploymentResponse instance using the specified properties.
         * @function create
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {kappa.IApplyDeploymentResponse=} [properties] Properties to set
         * @returns {kappa.ApplyDeploymentResponse} ApplyDeploymentResponse instance
         */
        ApplyDeploymentResponse.create = function create(properties) {
            return new ApplyDeploymentResponse(properties);
        };

        /**
         * Encodes the specified ApplyDeploymentResponse message. Does not implicitly {@link kappa.ApplyDeploymentResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {kappa.IApplyDeploymentResponse} message ApplyDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDeploymentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deployment != null && Object.hasOwnProperty.call(message, "deployment"))
                $root.kappa.Deployment.encode(message.deployment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ApplyDeploymentResponse message, length delimited. Does not implicitly {@link kappa.ApplyDeploymentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {kappa.IApplyDeploymentResponse} message ApplyDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDeploymentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDeploymentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ApplyDeploymentResponse} ApplyDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDeploymentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ApplyDeploymentResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deployment = $root.kappa.Deployment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApplyDeploymentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ApplyDeploymentResponse} ApplyDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDeploymentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDeploymentResponse message.
         * @function verify
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDeploymentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.deployment != null && message.hasOwnProperty("deployment")) {
                let error = $root.kappa.Deployment.verify(message.deployment);
                if (error)
                    return "deployment." + error;
            }
            return null;
        };

        /**
         * Creates an ApplyDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ApplyDeploymentResponse} ApplyDeploymentResponse
         */
        ApplyDeploymentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ApplyDeploymentResponse)
                return object;
            let message = new $root.kappa.ApplyDeploymentResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.ApplyDeploymentResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.deployment != null) {
                if (typeof object.deployment !== "object")
                    throw TypeError(".kappa.ApplyDeploymentResponse.deployment: object expected");
                message.deployment = $root.kappa.Deployment.fromObject(object.deployment);
            }
            return message;
        };

        /**
         * Creates a plain object from an ApplyDeploymentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ApplyDeploymentResponse
         * @static
         * @param {kappa.ApplyDeploymentResponse} message ApplyDeploymentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDeploymentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.deployment = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.deployment != null && message.hasOwnProperty("deployment"))
                object.deployment = $root.kappa.Deployment.toObject(message.deployment, options);
            return object;
        };

        /**
         * Converts this ApplyDeploymentResponse to JSON.
         * @function toJSON
         * @memberof kappa.ApplyDeploymentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDeploymentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApplyDeploymentResponse;
    })();

    kappa.DeleteDeploymentRequest = (function() {

        /**
         * Properties of a DeleteDeploymentRequest.
         * @memberof kappa
         * @interface IDeleteDeploymentRequest
         * @property {string|null} [deployment_name] DeleteDeploymentRequest deployment_name
         * @property {string|null} [namespace] DeleteDeploymentRequest namespace
         * @property {boolean|null} [force_delete] DeleteDeploymentRequest force_delete
         */

        /**
         * Constructs a new DeleteDeploymentRequest.
         * @memberof kappa
         * @classdesc Represents a DeleteDeploymentRequest.
         * @implements IDeleteDeploymentRequest
         * @constructor
         * @param {kappa.IDeleteDeploymentRequest=} [properties] Properties to set
         */
        function DeleteDeploymentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteDeploymentRequest deployment_name.
         * @member {string} deployment_name
         * @memberof kappa.DeleteDeploymentRequest
         * @instance
         */
        DeleteDeploymentRequest.prototype.deployment_name = "";

        /**
         * DeleteDeploymentRequest namespace.
         * @member {string} namespace
         * @memberof kappa.DeleteDeploymentRequest
         * @instance
         */
        DeleteDeploymentRequest.prototype.namespace = "";

        /**
         * DeleteDeploymentRequest force_delete.
         * @member {boolean} force_delete
         * @memberof kappa.DeleteDeploymentRequest
         * @instance
         */
        DeleteDeploymentRequest.prototype.force_delete = false;

        /**
         * Creates a new DeleteDeploymentRequest instance using the specified properties.
         * @function create
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {kappa.IDeleteDeploymentRequest=} [properties] Properties to set
         * @returns {kappa.DeleteDeploymentRequest} DeleteDeploymentRequest instance
         */
        DeleteDeploymentRequest.create = function create(properties) {
            return new DeleteDeploymentRequest(properties);
        };

        /**
         * Encodes the specified DeleteDeploymentRequest message. Does not implicitly {@link kappa.DeleteDeploymentRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {kappa.IDeleteDeploymentRequest} message DeleteDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteDeploymentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deployment_name != null && Object.hasOwnProperty.call(message, "deployment_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deployment_name);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.force_delete != null && Object.hasOwnProperty.call(message, "force_delete"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.force_delete);
            return writer;
        };

        /**
         * Encodes the specified DeleteDeploymentRequest message, length delimited. Does not implicitly {@link kappa.DeleteDeploymentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {kappa.IDeleteDeploymentRequest} message DeleteDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteDeploymentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteDeploymentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DeleteDeploymentRequest} DeleteDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteDeploymentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeleteDeploymentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deployment_name = reader.string();
                    break;
                case 2:
                    message.namespace = reader.string();
                    break;
                case 3:
                    message.force_delete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteDeploymentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DeleteDeploymentRequest} DeleteDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteDeploymentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteDeploymentRequest message.
         * @function verify
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteDeploymentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                if (!$util.isString(message.deployment_name))
                    return "deployment_name: string expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            if (message.force_delete != null && message.hasOwnProperty("force_delete"))
                if (typeof message.force_delete !== "boolean")
                    return "force_delete: boolean expected";
            return null;
        };

        /**
         * Creates a DeleteDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DeleteDeploymentRequest} DeleteDeploymentRequest
         */
        DeleteDeploymentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DeleteDeploymentRequest)
                return object;
            let message = new $root.kappa.DeleteDeploymentRequest();
            if (object.deployment_name != null)
                message.deployment_name = String(object.deployment_name);
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            if (object.force_delete != null)
                message.force_delete = Boolean(object.force_delete);
            return message;
        };

        /**
         * Creates a plain object from a DeleteDeploymentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DeleteDeploymentRequest
         * @static
         * @param {kappa.DeleteDeploymentRequest} message DeleteDeploymentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteDeploymentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deployment_name = "";
                object.namespace = "";
                object.force_delete = false;
            }
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                object.deployment_name = message.deployment_name;
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            if (message.force_delete != null && message.hasOwnProperty("force_delete"))
                object.force_delete = message.force_delete;
            return object;
        };

        /**
         * Converts this DeleteDeploymentRequest to JSON.
         * @function toJSON
         * @memberof kappa.DeleteDeploymentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteDeploymentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteDeploymentRequest;
    })();

    kappa.DeleteDeploymentResponse = (function() {

        /**
         * Properties of a DeleteDeploymentResponse.
         * @memberof kappa
         * @interface IDeleteDeploymentResponse
         * @property {kappa.IStatus|null} [status] DeleteDeploymentResponse status
         */

        /**
         * Constructs a new DeleteDeploymentResponse.
         * @memberof kappa
         * @classdesc Represents a DeleteDeploymentResponse.
         * @implements IDeleteDeploymentResponse
         * @constructor
         * @param {kappa.IDeleteDeploymentResponse=} [properties] Properties to set
         */
        function DeleteDeploymentResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteDeploymentResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.DeleteDeploymentResponse
         * @instance
         */
        DeleteDeploymentResponse.prototype.status = null;

        /**
         * Creates a new DeleteDeploymentResponse instance using the specified properties.
         * @function create
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {kappa.IDeleteDeploymentResponse=} [properties] Properties to set
         * @returns {kappa.DeleteDeploymentResponse} DeleteDeploymentResponse instance
         */
        DeleteDeploymentResponse.create = function create(properties) {
            return new DeleteDeploymentResponse(properties);
        };

        /**
         * Encodes the specified DeleteDeploymentResponse message. Does not implicitly {@link kappa.DeleteDeploymentResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {kappa.IDeleteDeploymentResponse} message DeleteDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteDeploymentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteDeploymentResponse message, length delimited. Does not implicitly {@link kappa.DeleteDeploymentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {kappa.IDeleteDeploymentResponse} message DeleteDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteDeploymentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteDeploymentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DeleteDeploymentResponse} DeleteDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteDeploymentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DeleteDeploymentResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteDeploymentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DeleteDeploymentResponse} DeleteDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteDeploymentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteDeploymentResponse message.
         * @function verify
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteDeploymentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a DeleteDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DeleteDeploymentResponse} DeleteDeploymentResponse
         */
        DeleteDeploymentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DeleteDeploymentResponse)
                return object;
            let message = new $root.kappa.DeleteDeploymentResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.DeleteDeploymentResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteDeploymentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DeleteDeploymentResponse
         * @static
         * @param {kappa.DeleteDeploymentResponse} message DeleteDeploymentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteDeploymentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this DeleteDeploymentResponse to JSON.
         * @function toJSON
         * @memberof kappa.DeleteDeploymentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteDeploymentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteDeploymentResponse;
    })();

    kappa.GetDeploymentRequest = (function() {

        /**
         * Properties of a GetDeploymentRequest.
         * @memberof kappa
         * @interface IGetDeploymentRequest
         * @property {string|null} [deployment_name] GetDeploymentRequest deployment_name
         * @property {string|null} [namespace] GetDeploymentRequest namespace
         */

        /**
         * Constructs a new GetDeploymentRequest.
         * @memberof kappa
         * @classdesc Represents a GetDeploymentRequest.
         * @implements IGetDeploymentRequest
         * @constructor
         * @param {kappa.IGetDeploymentRequest=} [properties] Properties to set
         */
        function GetDeploymentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDeploymentRequest deployment_name.
         * @member {string} deployment_name
         * @memberof kappa.GetDeploymentRequest
         * @instance
         */
        GetDeploymentRequest.prototype.deployment_name = "";

        /**
         * GetDeploymentRequest namespace.
         * @member {string} namespace
         * @memberof kappa.GetDeploymentRequest
         * @instance
         */
        GetDeploymentRequest.prototype.namespace = "";

        /**
         * Creates a new GetDeploymentRequest instance using the specified properties.
         * @function create
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {kappa.IGetDeploymentRequest=} [properties] Properties to set
         * @returns {kappa.GetDeploymentRequest} GetDeploymentRequest instance
         */
        GetDeploymentRequest.create = function create(properties) {
            return new GetDeploymentRequest(properties);
        };

        /**
         * Encodes the specified GetDeploymentRequest message. Does not implicitly {@link kappa.GetDeploymentRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {kappa.IGetDeploymentRequest} message GetDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeploymentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deployment_name != null && Object.hasOwnProperty.call(message, "deployment_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deployment_name);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            return writer;
        };

        /**
         * Encodes the specified GetDeploymentRequest message, length delimited. Does not implicitly {@link kappa.GetDeploymentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {kappa.IGetDeploymentRequest} message GetDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeploymentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDeploymentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.GetDeploymentRequest} GetDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeploymentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.GetDeploymentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deployment_name = reader.string();
                    break;
                case 2:
                    message.namespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDeploymentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.GetDeploymentRequest} GetDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeploymentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDeploymentRequest message.
         * @function verify
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDeploymentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                if (!$util.isString(message.deployment_name))
                    return "deployment_name: string expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            return null;
        };

        /**
         * Creates a GetDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.GetDeploymentRequest} GetDeploymentRequest
         */
        GetDeploymentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.GetDeploymentRequest)
                return object;
            let message = new $root.kappa.GetDeploymentRequest();
            if (object.deployment_name != null)
                message.deployment_name = String(object.deployment_name);
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            return message;
        };

        /**
         * Creates a plain object from a GetDeploymentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.GetDeploymentRequest
         * @static
         * @param {kappa.GetDeploymentRequest} message GetDeploymentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDeploymentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deployment_name = "";
                object.namespace = "";
            }
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                object.deployment_name = message.deployment_name;
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            return object;
        };

        /**
         * Converts this GetDeploymentRequest to JSON.
         * @function toJSON
         * @memberof kappa.GetDeploymentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDeploymentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetDeploymentRequest;
    })();

    kappa.GetDeploymentResponse = (function() {

        /**
         * Properties of a GetDeploymentResponse.
         * @memberof kappa
         * @interface IGetDeploymentResponse
         * @property {kappa.IStatus|null} [status] GetDeploymentResponse status
         * @property {kappa.IDeployment|null} [deployment] GetDeploymentResponse deployment
         */

        /**
         * Constructs a new GetDeploymentResponse.
         * @memberof kappa
         * @classdesc Represents a GetDeploymentResponse.
         * @implements IGetDeploymentResponse
         * @constructor
         * @param {kappa.IGetDeploymentResponse=} [properties] Properties to set
         */
        function GetDeploymentResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDeploymentResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.GetDeploymentResponse
         * @instance
         */
        GetDeploymentResponse.prototype.status = null;

        /**
         * GetDeploymentResponse deployment.
         * @member {kappa.IDeployment|null|undefined} deployment
         * @memberof kappa.GetDeploymentResponse
         * @instance
         */
        GetDeploymentResponse.prototype.deployment = null;

        /**
         * Creates a new GetDeploymentResponse instance using the specified properties.
         * @function create
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {kappa.IGetDeploymentResponse=} [properties] Properties to set
         * @returns {kappa.GetDeploymentResponse} GetDeploymentResponse instance
         */
        GetDeploymentResponse.create = function create(properties) {
            return new GetDeploymentResponse(properties);
        };

        /**
         * Encodes the specified GetDeploymentResponse message. Does not implicitly {@link kappa.GetDeploymentResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {kappa.IGetDeploymentResponse} message GetDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeploymentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deployment != null && Object.hasOwnProperty.call(message, "deployment"))
                $root.kappa.Deployment.encode(message.deployment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetDeploymentResponse message, length delimited. Does not implicitly {@link kappa.GetDeploymentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {kappa.IGetDeploymentResponse} message GetDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDeploymentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDeploymentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.GetDeploymentResponse} GetDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeploymentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.GetDeploymentResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deployment = $root.kappa.Deployment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDeploymentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.GetDeploymentResponse} GetDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDeploymentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDeploymentResponse message.
         * @function verify
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDeploymentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.deployment != null && message.hasOwnProperty("deployment")) {
                let error = $root.kappa.Deployment.verify(message.deployment);
                if (error)
                    return "deployment." + error;
            }
            return null;
        };

        /**
         * Creates a GetDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.GetDeploymentResponse} GetDeploymentResponse
         */
        GetDeploymentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.GetDeploymentResponse)
                return object;
            let message = new $root.kappa.GetDeploymentResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.GetDeploymentResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.deployment != null) {
                if (typeof object.deployment !== "object")
                    throw TypeError(".kappa.GetDeploymentResponse.deployment: object expected");
                message.deployment = $root.kappa.Deployment.fromObject(object.deployment);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetDeploymentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.GetDeploymentResponse
         * @static
         * @param {kappa.GetDeploymentResponse} message GetDeploymentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDeploymentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.deployment = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.deployment != null && message.hasOwnProperty("deployment"))
                object.deployment = $root.kappa.Deployment.toObject(message.deployment, options);
            return object;
        };

        /**
         * Converts this GetDeploymentResponse to JSON.
         * @function toJSON
         * @memberof kappa.GetDeploymentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDeploymentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetDeploymentResponse;
    })();

    kappa.DescribeDeploymentRequest = (function() {

        /**
         * Properties of a DescribeDeploymentRequest.
         * @memberof kappa
         * @interface IDescribeDeploymentRequest
         * @property {string|null} [deployment_name] DescribeDeploymentRequest deployment_name
         * @property {string|null} [namespace] DescribeDeploymentRequest namespace
         */

        /**
         * Constructs a new DescribeDeploymentRequest.
         * @memberof kappa
         * @classdesc Represents a DescribeDeploymentRequest.
         * @implements IDescribeDeploymentRequest
         * @constructor
         * @param {kappa.IDescribeDeploymentRequest=} [properties] Properties to set
         */
        function DescribeDeploymentRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DescribeDeploymentRequest deployment_name.
         * @member {string} deployment_name
         * @memberof kappa.DescribeDeploymentRequest
         * @instance
         */
        DescribeDeploymentRequest.prototype.deployment_name = "";

        /**
         * DescribeDeploymentRequest namespace.
         * @member {string} namespace
         * @memberof kappa.DescribeDeploymentRequest
         * @instance
         */
        DescribeDeploymentRequest.prototype.namespace = "";

        /**
         * Creates a new DescribeDeploymentRequest instance using the specified properties.
         * @function create
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {kappa.IDescribeDeploymentRequest=} [properties] Properties to set
         * @returns {kappa.DescribeDeploymentRequest} DescribeDeploymentRequest instance
         */
        DescribeDeploymentRequest.create = function create(properties) {
            return new DescribeDeploymentRequest(properties);
        };

        /**
         * Encodes the specified DescribeDeploymentRequest message. Does not implicitly {@link kappa.DescribeDeploymentRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {kappa.IDescribeDeploymentRequest} message DescribeDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescribeDeploymentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deployment_name != null && Object.hasOwnProperty.call(message, "deployment_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deployment_name);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            return writer;
        };

        /**
         * Encodes the specified DescribeDeploymentRequest message, length delimited. Does not implicitly {@link kappa.DescribeDeploymentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {kappa.IDescribeDeploymentRequest} message DescribeDeploymentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescribeDeploymentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DescribeDeploymentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DescribeDeploymentRequest} DescribeDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescribeDeploymentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DescribeDeploymentRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deployment_name = reader.string();
                    break;
                case 2:
                    message.namespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DescribeDeploymentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DescribeDeploymentRequest} DescribeDeploymentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescribeDeploymentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DescribeDeploymentRequest message.
         * @function verify
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DescribeDeploymentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                if (!$util.isString(message.deployment_name))
                    return "deployment_name: string expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            return null;
        };

        /**
         * Creates a DescribeDeploymentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DescribeDeploymentRequest} DescribeDeploymentRequest
         */
        DescribeDeploymentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DescribeDeploymentRequest)
                return object;
            let message = new $root.kappa.DescribeDeploymentRequest();
            if (object.deployment_name != null)
                message.deployment_name = String(object.deployment_name);
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            return message;
        };

        /**
         * Creates a plain object from a DescribeDeploymentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DescribeDeploymentRequest
         * @static
         * @param {kappa.DescribeDeploymentRequest} message DescribeDeploymentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DescribeDeploymentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deployment_name = "";
                object.namespace = "";
            }
            if (message.deployment_name != null && message.hasOwnProperty("deployment_name"))
                object.deployment_name = message.deployment_name;
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            return object;
        };

        /**
         * Converts this DescribeDeploymentRequest to JSON.
         * @function toJSON
         * @memberof kappa.DescribeDeploymentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DescribeDeploymentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DescribeDeploymentRequest;
    })();

    kappa.DescribeDeploymentResponse = (function() {

        /**
         * Properties of a DescribeDeploymentResponse.
         * @memberof kappa
         * @interface IDescribeDeploymentResponse
         * @property {kappa.IStatus|null} [status] DescribeDeploymentResponse status
         * @property {kappa.IDeploymentState|null} [state] DescribeDeploymentResponse state
         */

        /**
         * Constructs a new DescribeDeploymentResponse.
         * @memberof kappa
         * @classdesc Represents a DescribeDeploymentResponse.
         * @implements IDescribeDeploymentResponse
         * @constructor
         * @param {kappa.IDescribeDeploymentResponse=} [properties] Properties to set
         */
        function DescribeDeploymentResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DescribeDeploymentResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.DescribeDeploymentResponse
         * @instance
         */
        DescribeDeploymentResponse.prototype.status = null;

        /**
         * DescribeDeploymentResponse state.
         * @member {kappa.IDeploymentState|null|undefined} state
         * @memberof kappa.DescribeDeploymentResponse
         * @instance
         */
        DescribeDeploymentResponse.prototype.state = null;

        /**
         * Creates a new DescribeDeploymentResponse instance using the specified properties.
         * @function create
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {kappa.IDescribeDeploymentResponse=} [properties] Properties to set
         * @returns {kappa.DescribeDeploymentResponse} DescribeDeploymentResponse instance
         */
        DescribeDeploymentResponse.create = function create(properties) {
            return new DescribeDeploymentResponse(properties);
        };

        /**
         * Encodes the specified DescribeDeploymentResponse message. Does not implicitly {@link kappa.DescribeDeploymentResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {kappa.IDescribeDeploymentResponse} message DescribeDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescribeDeploymentResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                $root.kappa.DeploymentState.encode(message.state, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DescribeDeploymentResponse message, length delimited. Does not implicitly {@link kappa.DescribeDeploymentResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {kappa.IDescribeDeploymentResponse} message DescribeDeploymentResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DescribeDeploymentResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DescribeDeploymentResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DescribeDeploymentResponse} DescribeDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescribeDeploymentResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DescribeDeploymentResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = $root.kappa.DeploymentState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DescribeDeploymentResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DescribeDeploymentResponse} DescribeDeploymentResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DescribeDeploymentResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DescribeDeploymentResponse message.
         * @function verify
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DescribeDeploymentResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.state != null && message.hasOwnProperty("state")) {
                let error = $root.kappa.DeploymentState.verify(message.state);
                if (error)
                    return "state." + error;
            }
            return null;
        };

        /**
         * Creates a DescribeDeploymentResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DescribeDeploymentResponse} DescribeDeploymentResponse
         */
        DescribeDeploymentResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DescribeDeploymentResponse)
                return object;
            let message = new $root.kappa.DescribeDeploymentResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.DescribeDeploymentResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.state != null) {
                if (typeof object.state !== "object")
                    throw TypeError(".kappa.DescribeDeploymentResponse.state: object expected");
                message.state = $root.kappa.DeploymentState.fromObject(object.state);
            }
            return message;
        };

        /**
         * Creates a plain object from a DescribeDeploymentResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DescribeDeploymentResponse
         * @static
         * @param {kappa.DescribeDeploymentResponse} message DescribeDeploymentResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DescribeDeploymentResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.state = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = $root.kappa.DeploymentState.toObject(message.state, options);
            return object;
        };

        /**
         * Converts this DescribeDeploymentResponse to JSON.
         * @function toJSON
         * @memberof kappa.DescribeDeploymentResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DescribeDeploymentResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DescribeDeploymentResponse;
    })();

    kappa.ListDeploymentsRequest = (function() {

        /**
         * Properties of a ListDeploymentsRequest.
         * @memberof kappa
         * @interface IListDeploymentsRequest
         * @property {string|null} [namespace] ListDeploymentsRequest namespace
         * @property {number|null} [offset] ListDeploymentsRequest offset
         * @property {number|null} [limit] ListDeploymentsRequest limit
         * @property {kappa.DeploymentSpec.DeploymentOperator|null} [operator] ListDeploymentsRequest operator
         * @property {kappa.ListDeploymentsRequest.SORTABLE_COLUMN|null} [order_by] ListDeploymentsRequest order_by
         * @property {boolean|null} [ascending_order] ListDeploymentsRequest ascending_order
         * @property {string|null} [labels_query] ListDeploymentsRequest labels_query
         * @property {kappa.ILabelSelectors|null} [label_selectors] ListDeploymentsRequest label_selectors
         */

        /**
         * Constructs a new ListDeploymentsRequest.
         * @memberof kappa
         * @classdesc Represents a ListDeploymentsRequest.
         * @implements IListDeploymentsRequest
         * @constructor
         * @param {kappa.IListDeploymentsRequest=} [properties] Properties to set
         */
        function ListDeploymentsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListDeploymentsRequest namespace.
         * @member {string} namespace
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.namespace = "";

        /**
         * ListDeploymentsRequest offset.
         * @member {number} offset
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.offset = 0;

        /**
         * ListDeploymentsRequest limit.
         * @member {number} limit
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.limit = 0;

        /**
         * ListDeploymentsRequest operator.
         * @member {kappa.DeploymentSpec.DeploymentOperator} operator
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.operator = 0;

        /**
         * ListDeploymentsRequest order_by.
         * @member {kappa.ListDeploymentsRequest.SORTABLE_COLUMN} order_by
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.order_by = 0;

        /**
         * ListDeploymentsRequest ascending_order.
         * @member {boolean} ascending_order
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.ascending_order = false;

        /**
         * ListDeploymentsRequest labels_query.
         * @member {string} labels_query
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.labels_query = "";

        /**
         * ListDeploymentsRequest label_selectors.
         * @member {kappa.ILabelSelectors|null|undefined} label_selectors
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         */
        ListDeploymentsRequest.prototype.label_selectors = null;

        /**
         * Creates a new ListDeploymentsRequest instance using the specified properties.
         * @function create
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {kappa.IListDeploymentsRequest=} [properties] Properties to set
         * @returns {kappa.ListDeploymentsRequest} ListDeploymentsRequest instance
         */
        ListDeploymentsRequest.create = function create(properties) {
            return new ListDeploymentsRequest(properties);
        };

        /**
         * Encodes the specified ListDeploymentsRequest message. Does not implicitly {@link kappa.ListDeploymentsRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {kappa.IListDeploymentsRequest} message ListDeploymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDeploymentsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.operator);
            if (message.order_by != null && Object.hasOwnProperty.call(message, "order_by"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.order_by);
            if (message.ascending_order != null && Object.hasOwnProperty.call(message, "ascending_order"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ascending_order);
            if (message.labels_query != null && Object.hasOwnProperty.call(message, "labels_query"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.labels_query);
            if (message.label_selectors != null && Object.hasOwnProperty.call(message, "label_selectors"))
                $root.kappa.LabelSelectors.encode(message.label_selectors, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListDeploymentsRequest message, length delimited. Does not implicitly {@link kappa.ListDeploymentsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {kappa.IListDeploymentsRequest} message ListDeploymentsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDeploymentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListDeploymentsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ListDeploymentsRequest} ListDeploymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDeploymentsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ListDeploymentsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.namespace = reader.string();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                case 4:
                    message.operator = reader.int32();
                    break;
                case 5:
                    message.order_by = reader.int32();
                    break;
                case 6:
                    message.ascending_order = reader.bool();
                    break;
                case 7:
                    message.labels_query = reader.string();
                    break;
                case 8:
                    message.label_selectors = $root.kappa.LabelSelectors.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListDeploymentsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ListDeploymentsRequest} ListDeploymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDeploymentsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListDeploymentsRequest message.
         * @function verify
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListDeploymentsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                if (!$util.isString(message.namespace))
                    return "namespace: string expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                switch (message.operator) {
                default:
                    return "operator: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.order_by != null && message.hasOwnProperty("order_by"))
                switch (message.order_by) {
                default:
                    return "order_by: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.ascending_order != null && message.hasOwnProperty("ascending_order"))
                if (typeof message.ascending_order !== "boolean")
                    return "ascending_order: boolean expected";
            if (message.labels_query != null && message.hasOwnProperty("labels_query"))
                if (!$util.isString(message.labels_query))
                    return "labels_query: string expected";
            if (message.label_selectors != null && message.hasOwnProperty("label_selectors")) {
                let error = $root.kappa.LabelSelectors.verify(message.label_selectors);
                if (error)
                    return "label_selectors." + error;
            }
            return null;
        };

        /**
         * Creates a ListDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ListDeploymentsRequest} ListDeploymentsRequest
         */
        ListDeploymentsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ListDeploymentsRequest)
                return object;
            let message = new $root.kappa.ListDeploymentsRequest();
            if (object.namespace != null)
                message.namespace = String(object.namespace);
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            switch (object.operator) {
            case "UNSET":
            case 0:
                message.operator = 0;
                break;
            case "CUSTOM":
            case 1:
                message.operator = 1;
                break;
            case "AWS_SAGEMAKER":
            case 2:
                message.operator = 2;
                break;
            case "AWS_LAMBDA":
            case 3:
                message.operator = 3;
                break;
            case "AZURE_FUNCTIONS":
            case 4:
                message.operator = 4;
                break;
            case "AWS_EC2":
            case 5:
                message.operator = 5;
                break;
            }
            switch (object.order_by) {
            case "created_at":
            case 0:
                message.order_by = 0;
                break;
            case "name":
            case 1:
                message.order_by = 1;
                break;
            }
            if (object.ascending_order != null)
                message.ascending_order = Boolean(object.ascending_order);
            if (object.labels_query != null)
                message.labels_query = String(object.labels_query);
            if (object.label_selectors != null) {
                if (typeof object.label_selectors !== "object")
                    throw TypeError(".kappa.ListDeploymentsRequest.label_selectors: object expected");
                message.label_selectors = $root.kappa.LabelSelectors.fromObject(object.label_selectors);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListDeploymentsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ListDeploymentsRequest
         * @static
         * @param {kappa.ListDeploymentsRequest} message ListDeploymentsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListDeploymentsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.namespace = "";
                object.offset = 0;
                object.limit = 0;
                object.operator = options.enums === String ? "UNSET" : 0;
                object.order_by = options.enums === String ? "created_at" : 0;
                object.ascending_order = false;
                object.labels_query = "";
                object.label_selectors = null;
            }
            if (message.namespace != null && message.hasOwnProperty("namespace"))
                object.namespace = message.namespace;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = options.enums === String ? $root.kappa.DeploymentSpec.DeploymentOperator[message.operator] : message.operator;
            if (message.order_by != null && message.hasOwnProperty("order_by"))
                object.order_by = options.enums === String ? $root.kappa.ListDeploymentsRequest.SORTABLE_COLUMN[message.order_by] : message.order_by;
            if (message.ascending_order != null && message.hasOwnProperty("ascending_order"))
                object.ascending_order = message.ascending_order;
            if (message.labels_query != null && message.hasOwnProperty("labels_query"))
                object.labels_query = message.labels_query;
            if (message.label_selectors != null && message.hasOwnProperty("label_selectors"))
                object.label_selectors = $root.kappa.LabelSelectors.toObject(message.label_selectors, options);
            return object;
        };

        /**
         * Converts this ListDeploymentsRequest to JSON.
         * @function toJSON
         * @memberof kappa.ListDeploymentsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListDeploymentsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SORTABLE_COLUMN enum.
         * @name kappa.ListDeploymentsRequest.SORTABLE_COLUMN
         * @enum {number}
         * @property {number} created_at=0 created_at value
         * @property {number} name=1 name value
         */
        ListDeploymentsRequest.SORTABLE_COLUMN = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "created_at"] = 0;
            values[valuesById[1] = "name"] = 1;
            return values;
        })();

        return ListDeploymentsRequest;
    })();

    kappa.ListDeploymentsResponse = (function() {

        /**
         * Properties of a ListDeploymentsResponse.
         * @memberof kappa
         * @interface IListDeploymentsResponse
         * @property {kappa.IStatus|null} [status] ListDeploymentsResponse status
         * @property {Array.<kappa.IDeployment>|null} [deployments] ListDeploymentsResponse deployments
         */

        /**
         * Constructs a new ListDeploymentsResponse.
         * @memberof kappa
         * @classdesc Represents a ListDeploymentsResponse.
         * @implements IListDeploymentsResponse
         * @constructor
         * @param {kappa.IListDeploymentsResponse=} [properties] Properties to set
         */
        function ListDeploymentsResponse(properties) {
            this.deployments = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListDeploymentsResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.ListDeploymentsResponse
         * @instance
         */
        ListDeploymentsResponse.prototype.status = null;

        /**
         * ListDeploymentsResponse deployments.
         * @member {Array.<kappa.IDeployment>} deployments
         * @memberof kappa.ListDeploymentsResponse
         * @instance
         */
        ListDeploymentsResponse.prototype.deployments = $util.emptyArray;

        /**
         * Creates a new ListDeploymentsResponse instance using the specified properties.
         * @function create
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {kappa.IListDeploymentsResponse=} [properties] Properties to set
         * @returns {kappa.ListDeploymentsResponse} ListDeploymentsResponse instance
         */
        ListDeploymentsResponse.create = function create(properties) {
            return new ListDeploymentsResponse(properties);
        };

        /**
         * Encodes the specified ListDeploymentsResponse message. Does not implicitly {@link kappa.ListDeploymentsResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {kappa.IListDeploymentsResponse} message ListDeploymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDeploymentsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deployments != null && message.deployments.length)
                for (let i = 0; i < message.deployments.length; ++i)
                    $root.kappa.Deployment.encode(message.deployments[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListDeploymentsResponse message, length delimited. Does not implicitly {@link kappa.ListDeploymentsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {kappa.IListDeploymentsResponse} message ListDeploymentsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListDeploymentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListDeploymentsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ListDeploymentsResponse} ListDeploymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDeploymentsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ListDeploymentsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.deployments && message.deployments.length))
                        message.deployments = [];
                    message.deployments.push($root.kappa.Deployment.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListDeploymentsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ListDeploymentsResponse} ListDeploymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListDeploymentsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListDeploymentsResponse message.
         * @function verify
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListDeploymentsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.deployments != null && message.hasOwnProperty("deployments")) {
                if (!Array.isArray(message.deployments))
                    return "deployments: array expected";
                for (let i = 0; i < message.deployments.length; ++i) {
                    let error = $root.kappa.Deployment.verify(message.deployments[i]);
                    if (error)
                        return "deployments." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ListDeploymentsResponse} ListDeploymentsResponse
         */
        ListDeploymentsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ListDeploymentsResponse)
                return object;
            let message = new $root.kappa.ListDeploymentsResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.ListDeploymentsResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.deployments) {
                if (!Array.isArray(object.deployments))
                    throw TypeError(".kappa.ListDeploymentsResponse.deployments: array expected");
                message.deployments = [];
                for (let i = 0; i < object.deployments.length; ++i) {
                    if (typeof object.deployments[i] !== "object")
                        throw TypeError(".kappa.ListDeploymentsResponse.deployments: object expected");
                    message.deployments[i] = $root.kappa.Deployment.fromObject(object.deployments[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListDeploymentsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ListDeploymentsResponse
         * @static
         * @param {kappa.ListDeploymentsResponse} message ListDeploymentsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListDeploymentsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.deployments = [];
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.deployments && message.deployments.length) {
                object.deployments = [];
                for (let j = 0; j < message.deployments.length; ++j)
                    object.deployments[j] = $root.kappa.Deployment.toObject(message.deployments[j], options);
            }
            return object;
        };

        /**
         * Converts this ListDeploymentsResponse to JSON.
         * @function toJSON
         * @memberof kappa.ListDeploymentsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListDeploymentsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListDeploymentsResponse;
    })();

    kappa.Status = (function() {

        /**
         * Properties of a Status.
         * @memberof kappa
         * @interface IStatus
         * @property {kappa.Status.Code|null} [status_code] Status status_code
         * @property {string|null} [error_message] Status error_message
         */

        /**
         * Constructs a new Status.
         * @memberof kappa
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {kappa.IStatus=} [properties] Properties to set
         */
        function Status(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status status_code.
         * @member {kappa.Status.Code} status_code
         * @memberof kappa.Status
         * @instance
         */
        Status.prototype.status_code = 0;

        /**
         * Status error_message.
         * @member {string} error_message
         * @memberof kappa.Status
         * @instance
         */
        Status.prototype.error_message = "";

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof kappa.Status
         * @static
         * @param {kappa.IStatus=} [properties] Properties to set
         * @returns {kappa.Status} Status instance
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link kappa.Status.verify|verify} messages.
         * @function encode
         * @memberof kappa.Status
         * @static
         * @param {kappa.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status_code != null && Object.hasOwnProperty.call(message, "status_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status_code);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.error_message);
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link kappa.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.Status
         * @static
         * @param {kappa.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.Status();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status_code = reader.int32();
                    break;
                case 2:
                    message.error_message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof kappa.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                switch (message.status_code) {
                default:
                    return "status_code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 16:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 20:
                    break;
                }
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.Status} Status
         */
        Status.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.Status)
                return object;
            let message = new $root.kappa.Status();
            switch (object.status_code) {
            case "OK":
            case 0:
                message.status_code = 0;
                break;
            case "CANCELLED":
            case 1:
                message.status_code = 1;
                break;
            case "UNKNOWN":
            case 2:
                message.status_code = 2;
                break;
            case "INVALID_ARGUMENT":
            case 3:
                message.status_code = 3;
                break;
            case "DEADLINE_EXCEEDED":
            case 4:
                message.status_code = 4;
                break;
            case "NOT_FOUND":
            case 5:
                message.status_code = 5;
                break;
            case "ALREADY_EXISTS":
            case 6:
                message.status_code = 6;
                break;
            case "PERMISSION_DENIED":
            case 7:
                message.status_code = 7;
                break;
            case "UNAUTHENTICATED":
            case 16:
                message.status_code = 16;
                break;
            case "RESOURCE_EXHAUSTED":
            case 8:
                message.status_code = 8;
                break;
            case "FAILED_PRECONDITION":
            case 9:
                message.status_code = 9;
                break;
            case "ABORTED":
            case 10:
                message.status_code = 10;
                break;
            case "OUT_OF_RANGE":
            case 11:
                message.status_code = 11;
                break;
            case "UNIMPLEMENTED":
            case 12:
                message.status_code = 12;
                break;
            case "INTERNAL":
            case 13:
                message.status_code = 13;
                break;
            case "UNAVAILABLE":
            case 14:
                message.status_code = 14;
                break;
            case "DATA_LOSS":
            case 15:
                message.status_code = 15;
                break;
            case "DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_":
            case 20:
                message.status_code = 20;
                break;
            }
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.Status
         * @static
         * @param {kappa.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status_code = options.enums === String ? "OK" : 0;
                object.error_message = "";
            }
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                object.status_code = options.enums === String ? $root.kappa.Status.Code[message.status_code] : message.status_code;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof kappa.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Code enum.
         * @name kappa.Status.Code
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         * @property {number} DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_=20 DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_ value
         */
        Status.Code = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[16] = "UNAUTHENTICATED"] = 16;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            values[valuesById[20] = "DO_NOT_USE_RESERVED_FOR_FUTURE_EXPANSION_USE_DEFAULT_IN_SWITCH_INSTEAD_"] = 20;
            return values;
        })();

        return Status;
    })();

    kappa.LabelSelectors = (function() {

        /**
         * Properties of a LabelSelectors.
         * @memberof kappa
         * @interface ILabelSelectors
         * @property {Object.<string,string>|null} [match_labels] LabelSelectors match_labels
         * @property {Array.<kappa.LabelSelectors.ILabelSelectorExpression>|null} [match_expressions] LabelSelectors match_expressions
         */

        /**
         * Constructs a new LabelSelectors.
         * @memberof kappa
         * @classdesc Represents a LabelSelectors.
         * @implements ILabelSelectors
         * @constructor
         * @param {kappa.ILabelSelectors=} [properties] Properties to set
         */
        function LabelSelectors(properties) {
            this.match_labels = {};
            this.match_expressions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelSelectors match_labels.
         * @member {Object.<string,string>} match_labels
         * @memberof kappa.LabelSelectors
         * @instance
         */
        LabelSelectors.prototype.match_labels = $util.emptyObject;

        /**
         * LabelSelectors match_expressions.
         * @member {Array.<kappa.LabelSelectors.ILabelSelectorExpression>} match_expressions
         * @memberof kappa.LabelSelectors
         * @instance
         */
        LabelSelectors.prototype.match_expressions = $util.emptyArray;

        /**
         * Creates a new LabelSelectors instance using the specified properties.
         * @function create
         * @memberof kappa.LabelSelectors
         * @static
         * @param {kappa.ILabelSelectors=} [properties] Properties to set
         * @returns {kappa.LabelSelectors} LabelSelectors instance
         */
        LabelSelectors.create = function create(properties) {
            return new LabelSelectors(properties);
        };

        /**
         * Encodes the specified LabelSelectors message. Does not implicitly {@link kappa.LabelSelectors.verify|verify} messages.
         * @function encode
         * @memberof kappa.LabelSelectors
         * @static
         * @param {kappa.ILabelSelectors} message LabelSelectors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectors.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.match_labels != null && Object.hasOwnProperty.call(message, "match_labels"))
                for (let keys = Object.keys(message.match_labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.match_labels[keys[i]]).ldelim();
            if (message.match_expressions != null && message.match_expressions.length)
                for (let i = 0; i < message.match_expressions.length; ++i)
                    $root.kappa.LabelSelectors.LabelSelectorExpression.encode(message.match_expressions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LabelSelectors message, length delimited. Does not implicitly {@link kappa.LabelSelectors.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.LabelSelectors
         * @static
         * @param {kappa.ILabelSelectors} message LabelSelectors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectors.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelSelectors message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.LabelSelectors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.LabelSelectors} LabelSelectors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectors.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.LabelSelectors(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.match_labels === $util.emptyObject)
                        message.match_labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.match_labels[key] = reader.string();
                    break;
                case 2:
                    if (!(message.match_expressions && message.match_expressions.length))
                        message.match_expressions = [];
                    message.match_expressions.push($root.kappa.LabelSelectors.LabelSelectorExpression.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelSelectors message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.LabelSelectors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.LabelSelectors} LabelSelectors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectors.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelSelectors message.
         * @function verify
         * @memberof kappa.LabelSelectors
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelSelectors.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.match_labels != null && message.hasOwnProperty("match_labels")) {
                if (!$util.isObject(message.match_labels))
                    return "match_labels: object expected";
                let key = Object.keys(message.match_labels);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.match_labels[key[i]]))
                        return "match_labels: string{k:string} expected";
            }
            if (message.match_expressions != null && message.hasOwnProperty("match_expressions")) {
                if (!Array.isArray(message.match_expressions))
                    return "match_expressions: array expected";
                for (let i = 0; i < message.match_expressions.length; ++i) {
                    let error = $root.kappa.LabelSelectors.LabelSelectorExpression.verify(message.match_expressions[i]);
                    if (error)
                        return "match_expressions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LabelSelectors message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.LabelSelectors
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.LabelSelectors} LabelSelectors
         */
        LabelSelectors.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.LabelSelectors)
                return object;
            let message = new $root.kappa.LabelSelectors();
            if (object.match_labels) {
                if (typeof object.match_labels !== "object")
                    throw TypeError(".kappa.LabelSelectors.match_labels: object expected");
                message.match_labels = {};
                for (let keys = Object.keys(object.match_labels), i = 0; i < keys.length; ++i)
                    message.match_labels[keys[i]] = String(object.match_labels[keys[i]]);
            }
            if (object.match_expressions) {
                if (!Array.isArray(object.match_expressions))
                    throw TypeError(".kappa.LabelSelectors.match_expressions: array expected");
                message.match_expressions = [];
                for (let i = 0; i < object.match_expressions.length; ++i) {
                    if (typeof object.match_expressions[i] !== "object")
                        throw TypeError(".kappa.LabelSelectors.match_expressions: object expected");
                    message.match_expressions[i] = $root.kappa.LabelSelectors.LabelSelectorExpression.fromObject(object.match_expressions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LabelSelectors message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.LabelSelectors
         * @static
         * @param {kappa.LabelSelectors} message LabelSelectors
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelSelectors.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.match_expressions = [];
            if (options.objects || options.defaults)
                object.match_labels = {};
            let keys2;
            if (message.match_labels && (keys2 = Object.keys(message.match_labels)).length) {
                object.match_labels = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.match_labels[keys2[j]] = message.match_labels[keys2[j]];
            }
            if (message.match_expressions && message.match_expressions.length) {
                object.match_expressions = [];
                for (let j = 0; j < message.match_expressions.length; ++j)
                    object.match_expressions[j] = $root.kappa.LabelSelectors.LabelSelectorExpression.toObject(message.match_expressions[j], options);
            }
            return object;
        };

        /**
         * Converts this LabelSelectors to JSON.
         * @function toJSON
         * @memberof kappa.LabelSelectors
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelSelectors.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LabelSelectors.LabelSelectorExpression = (function() {

            /**
             * Properties of a LabelSelectorExpression.
             * @memberof kappa.LabelSelectors
             * @interface ILabelSelectorExpression
             * @property {kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE|null} [operator] LabelSelectorExpression operator
             * @property {string|null} [key] LabelSelectorExpression key
             * @property {Array.<string>|null} [values] LabelSelectorExpression values
             */

            /**
             * Constructs a new LabelSelectorExpression.
             * @memberof kappa.LabelSelectors
             * @classdesc Represents a LabelSelectorExpression.
             * @implements ILabelSelectorExpression
             * @constructor
             * @param {kappa.LabelSelectors.ILabelSelectorExpression=} [properties] Properties to set
             */
            function LabelSelectorExpression(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LabelSelectorExpression operator.
             * @member {kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE} operator
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @instance
             */
            LabelSelectorExpression.prototype.operator = 0;

            /**
             * LabelSelectorExpression key.
             * @member {string} key
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @instance
             */
            LabelSelectorExpression.prototype.key = "";

            /**
             * LabelSelectorExpression values.
             * @member {Array.<string>} values
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @instance
             */
            LabelSelectorExpression.prototype.values = $util.emptyArray;

            /**
             * Creates a new LabelSelectorExpression instance using the specified properties.
             * @function create
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {kappa.LabelSelectors.ILabelSelectorExpression=} [properties] Properties to set
             * @returns {kappa.LabelSelectors.LabelSelectorExpression} LabelSelectorExpression instance
             */
            LabelSelectorExpression.create = function create(properties) {
                return new LabelSelectorExpression(properties);
            };

            /**
             * Encodes the specified LabelSelectorExpression message. Does not implicitly {@link kappa.LabelSelectors.LabelSelectorExpression.verify|verify} messages.
             * @function encode
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {kappa.LabelSelectors.ILabelSelectorExpression} message LabelSelectorExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelSelectorExpression.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operator);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.values[i]);
                return writer;
            };

            /**
             * Encodes the specified LabelSelectorExpression message, length delimited. Does not implicitly {@link kappa.LabelSelectors.LabelSelectorExpression.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {kappa.LabelSelectors.ILabelSelectorExpression} message LabelSelectorExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LabelSelectorExpression.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LabelSelectorExpression message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.LabelSelectors.LabelSelectorExpression} LabelSelectorExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LabelSelectorExpression.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.LabelSelectors.LabelSelectorExpression();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.operator = reader.int32();
                        break;
                    case 2:
                        message.key = reader.string();
                        break;
                    case 3:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LabelSelectorExpression message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.LabelSelectors.LabelSelectorExpression} LabelSelectorExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LabelSelectorExpression.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LabelSelectorExpression message.
             * @function verify
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LabelSelectorExpression.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operator != null && message.hasOwnProperty("operator"))
                    switch (message.operator) {
                    default:
                        return "operator: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i)
                        if (!$util.isString(message.values[i]))
                            return "values: string[] expected";
                }
                return null;
            };

            /**
             * Creates a LabelSelectorExpression message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.LabelSelectors.LabelSelectorExpression} LabelSelectorExpression
             */
            LabelSelectorExpression.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.LabelSelectors.LabelSelectorExpression)
                    return object;
                let message = new $root.kappa.LabelSelectors.LabelSelectorExpression();
                switch (object.operator) {
                case "In":
                case 0:
                    message.operator = 0;
                    break;
                case "NotIn":
                case 1:
                    message.operator = 1;
                    break;
                case "Exists":
                case 2:
                    message.operator = 2;
                    break;
                case "DoesNotExist":
                case 3:
                    message.operator = 3;
                    break;
                }
                if (object.key != null)
                    message.key = String(object.key);
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".kappa.LabelSelectors.LabelSelectorExpression.values: array expected");
                    message.values = [];
                    for (let i = 0; i < object.values.length; ++i)
                        message.values[i] = String(object.values[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a LabelSelectorExpression message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @static
             * @param {kappa.LabelSelectors.LabelSelectorExpression} message LabelSelectorExpression
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LabelSelectorExpression.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (options.defaults) {
                    object.operator = options.enums === String ? "In" : 0;
                    object.key = "";
                }
                if (message.operator != null && message.hasOwnProperty("operator"))
                    object.operator = options.enums === String ? $root.kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE[message.operator] : message.operator;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.values && message.values.length) {
                    object.values = [];
                    for (let j = 0; j < message.values.length; ++j)
                        object.values[j] = message.values[j];
                }
                return object;
            };

            /**
             * Converts this LabelSelectorExpression to JSON.
             * @function toJSON
             * @memberof kappa.LabelSelectors.LabelSelectorExpression
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LabelSelectorExpression.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OPERATOR_TYPE enum.
             * @name kappa.LabelSelectors.LabelSelectorExpression.OPERATOR_TYPE
             * @enum {number}
             * @property {number} In=0 In value
             * @property {number} NotIn=1 NotIn value
             * @property {number} Exists=2 Exists value
             * @property {number} DoesNotExist=3 DoesNotExist value
             */
            LabelSelectorExpression.OPERATOR_TYPE = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "In"] = 0;
                values[valuesById[1] = "NotIn"] = 1;
                values[valuesById[2] = "Exists"] = 2;
                values[valuesById[3] = "DoesNotExist"] = 3;
                return values;
            })();

            return LabelSelectorExpression;
        })();

        return LabelSelectors;
    })();

    kappa.Gamma = (function() {

        /**
         * Constructs a new Gamma service.
         * @memberof kappa
         * @classdesc Represents a Gamma
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Gamma(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Gamma.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gamma;

        /**
         * Creates new Gamma service using the specified rpc implementation.
         * @function create
         * @memberof kappa.Gamma
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Gamma} RPC service. Useful where requests and/or responses are streamed.
         */
        Gamma.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link kappa.Gamma#healthCheck}.
         * @memberof kappa.Gamma
         * @typedef HealthCheckCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.HealthCheckResponse} [response] HealthCheckResponse
         */

        /**
         * Calls HealthCheck.
         * @function healthCheck
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {kappa.Gamma.HealthCheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.healthCheck = function healthCheck(request, callback) {
            return this.rpcCall(healthCheck, $root.google.protobuf.Empty, $root.kappa.HealthCheckResponse, request, callback);
        }, "name", { value: "HealthCheck" });

        /**
         * Calls HealthCheck.
         * @function healthCheck
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<kappa.HealthCheckResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#getGammaServiceVersion}.
         * @memberof kappa.Gamma
         * @typedef GetGammaServiceVersionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.GetGammaServiceVersionResponse} [response] GetGammaServiceVersionResponse
         */

        /**
         * Calls GetGammaServiceVersion.
         * @function getGammaServiceVersion
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {kappa.Gamma.GetGammaServiceVersionCallback} callback Node-style callback called with the error, if any, and GetGammaServiceVersionResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.getGammaServiceVersion = function getGammaServiceVersion(request, callback) {
            return this.rpcCall(getGammaServiceVersion, $root.google.protobuf.Empty, $root.kappa.GetGammaServiceVersionResponse, request, callback);
        }, "name", { value: "GetGammaServiceVersion" });

        /**
         * Calls GetGammaServiceVersion.
         * @function getGammaServiceVersion
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<kappa.GetGammaServiceVersionResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#applyDeployment}.
         * @memberof kappa.Gamma
         * @typedef ApplyDeploymentCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.ApplyDeploymentResponse} [response] ApplyDeploymentResponse
         */

        /**
         * Calls ApplyDeployment.
         * @function applyDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IApplyDeploymentRequest} request ApplyDeploymentRequest message or plain object
         * @param {kappa.Gamma.ApplyDeploymentCallback} callback Node-style callback called with the error, if any, and ApplyDeploymentResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.applyDeployment = function applyDeployment(request, callback) {
            return this.rpcCall(applyDeployment, $root.kappa.ApplyDeploymentRequest, $root.kappa.ApplyDeploymentResponse, request, callback);
        }, "name", { value: "ApplyDeployment" });

        /**
         * Calls ApplyDeployment.
         * @function applyDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IApplyDeploymentRequest} request ApplyDeploymentRequest message or plain object
         * @returns {Promise<kappa.ApplyDeploymentResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#deleteDeployment}.
         * @memberof kappa.Gamma
         * @typedef DeleteDeploymentCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.DeleteDeploymentResponse} [response] DeleteDeploymentResponse
         */

        /**
         * Calls DeleteDeployment.
         * @function deleteDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDeleteDeploymentRequest} request DeleteDeploymentRequest message or plain object
         * @param {kappa.Gamma.DeleteDeploymentCallback} callback Node-style callback called with the error, if any, and DeleteDeploymentResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.deleteDeployment = function deleteDeployment(request, callback) {
            return this.rpcCall(deleteDeployment, $root.kappa.DeleteDeploymentRequest, $root.kappa.DeleteDeploymentResponse, request, callback);
        }, "name", { value: "DeleteDeployment" });

        /**
         * Calls DeleteDeployment.
         * @function deleteDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDeleteDeploymentRequest} request DeleteDeploymentRequest message or plain object
         * @returns {Promise<kappa.DeleteDeploymentResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#getDeployment}.
         * @memberof kappa.Gamma
         * @typedef GetDeploymentCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.GetDeploymentResponse} [response] GetDeploymentResponse
         */

        /**
         * Calls GetDeployment.
         * @function getDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IGetDeploymentRequest} request GetDeploymentRequest message or plain object
         * @param {kappa.Gamma.GetDeploymentCallback} callback Node-style callback called with the error, if any, and GetDeploymentResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.getDeployment = function getDeployment(request, callback) {
            return this.rpcCall(getDeployment, $root.kappa.GetDeploymentRequest, $root.kappa.GetDeploymentResponse, request, callback);
        }, "name", { value: "GetDeployment" });

        /**
         * Calls GetDeployment.
         * @function getDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IGetDeploymentRequest} request GetDeploymentRequest message or plain object
         * @returns {Promise<kappa.GetDeploymentResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#describeDeployment}.
         * @memberof kappa.Gamma
         * @typedef DescribeDeploymentCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.DescribeDeploymentResponse} [response] DescribeDeploymentResponse
         */

        /**
         * Calls DescribeDeployment.
         * @function describeDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDescribeDeploymentRequest} request DescribeDeploymentRequest message or plain object
         * @param {kappa.Gamma.DescribeDeploymentCallback} callback Node-style callback called with the error, if any, and DescribeDeploymentResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.describeDeployment = function describeDeployment(request, callback) {
            return this.rpcCall(describeDeployment, $root.kappa.DescribeDeploymentRequest, $root.kappa.DescribeDeploymentResponse, request, callback);
        }, "name", { value: "DescribeDeployment" });

        /**
         * Calls DescribeDeployment.
         * @function describeDeployment
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDescribeDeploymentRequest} request DescribeDeploymentRequest message or plain object
         * @returns {Promise<kappa.DescribeDeploymentResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#listDeployments}.
         * @memberof kappa.Gamma
         * @typedef ListDeploymentsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.ListDeploymentsResponse} [response] ListDeploymentsResponse
         */

        /**
         * Calls ListDeployments.
         * @function listDeployments
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IListDeploymentsRequest} request ListDeploymentsRequest message or plain object
         * @param {kappa.Gamma.ListDeploymentsCallback} callback Node-style callback called with the error, if any, and ListDeploymentsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.listDeployments = function listDeployments(request, callback) {
            return this.rpcCall(listDeployments, $root.kappa.ListDeploymentsRequest, $root.kappa.ListDeploymentsResponse, request, callback);
        }, "name", { value: "ListDeployments" });

        /**
         * Calls ListDeployments.
         * @function listDeployments
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IListDeploymentsRequest} request ListDeploymentsRequest message or plain object
         * @returns {Promise<kappa.ListDeploymentsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#addBento}.
         * @memberof kappa.Gamma
         * @typedef AddBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.AddBentoResponse} [response] AddBentoResponse
         */

        /**
         * Calls AddBento.
         * @function addBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IAddBentoRequest} request AddBentoRequest message or plain object
         * @param {kappa.Gamma.AddBentoCallback} callback Node-style callback called with the error, if any, and AddBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.addBento = function addBento(request, callback) {
            return this.rpcCall(addBento, $root.kappa.AddBentoRequest, $root.kappa.AddBentoResponse, request, callback);
        }, "name", { value: "AddBento" });

        /**
         * Calls AddBento.
         * @function addBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IAddBentoRequest} request AddBentoRequest message or plain object
         * @returns {Promise<kappa.AddBentoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#updateBento}.
         * @memberof kappa.Gamma
         * @typedef UpdateBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.UpdateBentoResponse} [response] UpdateBentoResponse
         */

        /**
         * Calls UpdateBento.
         * @function updateBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IUpdateBentoRequest} request UpdateBentoRequest message or plain object
         * @param {kappa.Gamma.UpdateBentoCallback} callback Node-style callback called with the error, if any, and UpdateBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.updateBento = function updateBento(request, callback) {
            return this.rpcCall(updateBento, $root.kappa.UpdateBentoRequest, $root.kappa.UpdateBentoResponse, request, callback);
        }, "name", { value: "UpdateBento" });

        /**
         * Calls UpdateBento.
         * @function updateBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IUpdateBentoRequest} request UpdateBentoRequest message or plain object
         * @returns {Promise<kappa.UpdateBentoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#getBento}.
         * @memberof kappa.Gamma
         * @typedef GetBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.GetBentoResponse} [response] GetBentoResponse
         */

        /**
         * Calls GetBento.
         * @function getBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IGetBentoRequest} request GetBentoRequest message or plain object
         * @param {kappa.Gamma.GetBentoCallback} callback Node-style callback called with the error, if any, and GetBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.getBento = function getBento(request, callback) {
            return this.rpcCall(getBento, $root.kappa.GetBentoRequest, $root.kappa.GetBentoResponse, request, callback);
        }, "name", { value: "GetBento" });

        /**
         * Calls GetBento.
         * @function getBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IGetBentoRequest} request GetBentoRequest message or plain object
         * @returns {Promise<kappa.GetBentoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#dangerouslyDeleteBento}.
         * @memberof kappa.Gamma
         * @typedef DangerouslyDeleteBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.DangerouslyDeleteBentoResponse} [response] DangerouslyDeleteBentoResponse
         */

        /**
         * Calls DangerouslyDeleteBento.
         * @function dangerouslyDeleteBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDangerouslyDeleteBentoRequest} request DangerouslyDeleteBentoRequest message or plain object
         * @param {kappa.Gamma.DangerouslyDeleteBentoCallback} callback Node-style callback called with the error, if any, and DangerouslyDeleteBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.dangerouslyDeleteBento = function dangerouslyDeleteBento(request, callback) {
            return this.rpcCall(dangerouslyDeleteBento, $root.kappa.DangerouslyDeleteBentoRequest, $root.kappa.DangerouslyDeleteBentoResponse, request, callback);
        }, "name", { value: "DangerouslyDeleteBento" });

        /**
         * Calls DangerouslyDeleteBento.
         * @function dangerouslyDeleteBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IDangerouslyDeleteBentoRequest} request DangerouslyDeleteBentoRequest message or plain object
         * @returns {Promise<kappa.DangerouslyDeleteBentoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#listBento}.
         * @memberof kappa.Gamma
         * @typedef ListBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.ListBentoResponse} [response] ListBentoResponse
         */

        /**
         * Calls ListBento.
         * @function listBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IListBentoRequest} request ListBentoRequest message or plain object
         * @param {kappa.Gamma.ListBentoCallback} callback Node-style callback called with the error, if any, and ListBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.listBento = function listBento(request, callback) {
            return this.rpcCall(listBento, $root.kappa.ListBentoRequest, $root.kappa.ListBentoResponse, request, callback);
        }, "name", { value: "ListBento" });

        /**
         * Calls ListBento.
         * @function listBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IListBentoRequest} request ListBentoRequest message or plain object
         * @returns {Promise<kappa.ListBentoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#listProject}.
         * @memberof kappa.Gamma
         * @typedef ListProjectCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.ListProjectResponse} [response] ListProjectResponse
         */

        /**
         * Calls ListProject.
         * @function listProject
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {kappa.Gamma.ListProjectCallback} callback Node-style callback called with the error, if any, and ListProjectResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.listProject = function listProject(request, callback) {
            return this.rpcCall(listProject, $root.google.protobuf.Empty, $root.kappa.ListProjectResponse, request, callback);
        }, "name", { value: "ListProject" });

        /**
         * Calls ListProject.
         * @function listProject
         * @memberof kappa.Gamma
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<kappa.ListProjectResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link kappa.Gamma#containerizeBento}.
         * @memberof kappa.Gamma
         * @typedef ContainerizeBentoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {kappa.ContainerizeBentoResponse} [response] ContainerizeBentoResponse
         */

        /**
         * Calls ContainerizeBento.
         * @function containerizeBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IContainerizeBentoRequest} request ContainerizeBentoRequest message or plain object
         * @param {kappa.Gamma.ContainerizeBentoCallback} callback Node-style callback called with the error, if any, and ContainerizeBentoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gamma.prototype.containerizeBento = function containerizeBento(request, callback) {
            return this.rpcCall(containerizeBento, $root.kappa.ContainerizeBentoRequest, $root.kappa.ContainerizeBentoResponse, request, callback);
        }, "name", { value: "ContainerizeBento" });

        /**
         * Calls ContainerizeBento.
         * @function containerizeBento
         * @memberof kappa.Gamma
         * @instance
         * @param {kappa.IContainerizeBentoRequest} request ContainerizeBentoRequest message or plain object
         * @returns {Promise<kappa.ContainerizeBentoResponse>} Promise
         * @variation 2
         */

        return Gamma;
    })();

    kappa.HealthCheckResponse = (function() {

        /**
         * Properties of a HealthCheckResponse.
         * @memberof kappa
         * @interface IHealthCheckResponse
         * @property {kappa.IStatus|null} [status] HealthCheckResponse status
         */

        /**
         * Constructs a new HealthCheckResponse.
         * @memberof kappa
         * @classdesc Represents a HealthCheckResponse.
         * @implements IHealthCheckResponse
         * @constructor
         * @param {kappa.IHealthCheckResponse=} [properties] Properties to set
         */
        function HealthCheckResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HealthCheckResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.HealthCheckResponse
         * @instance
         */
        HealthCheckResponse.prototype.status = null;

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @function create
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {kappa.IHealthCheckResponse=} [properties] Properties to set
         * @returns {kappa.HealthCheckResponse} HealthCheckResponse instance
         */
        HealthCheckResponse.create = function create(properties) {
            return new HealthCheckResponse(properties);
        };

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link kappa.HealthCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {kappa.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link kappa.HealthCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {kappa.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.HealthCheckResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HealthCheckResponse message.
         * @function verify
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HealthCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.HealthCheckResponse} HealthCheckResponse
         */
        HealthCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.HealthCheckResponse)
                return object;
            let message = new $root.kappa.HealthCheckResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.HealthCheckResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.HealthCheckResponse
         * @static
         * @param {kappa.HealthCheckResponse} message HealthCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HealthCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @function toJSON
         * @memberof kappa.HealthCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HealthCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HealthCheckResponse;
    })();

    kappa.GetGammaServiceVersionResponse = (function() {

        /**
         * Properties of a GetGammaServiceVersionResponse.
         * @memberof kappa
         * @interface IGetGammaServiceVersionResponse
         * @property {kappa.IStatus|null} [status] GetGammaServiceVersionResponse status
         * @property {string|null} [version] GetGammaServiceVersionResponse version
         */

        /**
         * Constructs a new GetGammaServiceVersionResponse.
         * @memberof kappa
         * @classdesc Represents a GetGammaServiceVersionResponse.
         * @implements IGetGammaServiceVersionResponse
         * @constructor
         * @param {kappa.IGetGammaServiceVersionResponse=} [properties] Properties to set
         */
        function GetGammaServiceVersionResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGammaServiceVersionResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.GetGammaServiceVersionResponse
         * @instance
         */
        GetGammaServiceVersionResponse.prototype.status = null;

        /**
         * GetGammaServiceVersionResponse version.
         * @member {string} version
         * @memberof kappa.GetGammaServiceVersionResponse
         * @instance
         */
        GetGammaServiceVersionResponse.prototype.version = "";

        /**
         * Creates a new GetGammaServiceVersionResponse instance using the specified properties.
         * @function create
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {kappa.IGetGammaServiceVersionResponse=} [properties] Properties to set
         * @returns {kappa.GetGammaServiceVersionResponse} GetGammaServiceVersionResponse instance
         */
        GetGammaServiceVersionResponse.create = function create(properties) {
            return new GetGammaServiceVersionResponse(properties);
        };

        /**
         * Encodes the specified GetGammaServiceVersionResponse message. Does not implicitly {@link kappa.GetGammaServiceVersionResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {kappa.IGetGammaServiceVersionResponse} message GetGammaServiceVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGammaServiceVersionResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified GetGammaServiceVersionResponse message, length delimited. Does not implicitly {@link kappa.GetGammaServiceVersionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {kappa.IGetGammaServiceVersionResponse} message GetGammaServiceVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGammaServiceVersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGammaServiceVersionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.GetGammaServiceVersionResponse} GetGammaServiceVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGammaServiceVersionResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.GetGammaServiceVersionResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGammaServiceVersionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.GetGammaServiceVersionResponse} GetGammaServiceVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGammaServiceVersionResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGammaServiceVersionResponse message.
         * @function verify
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGammaServiceVersionResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a GetGammaServiceVersionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.GetGammaServiceVersionResponse} GetGammaServiceVersionResponse
         */
        GetGammaServiceVersionResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.GetGammaServiceVersionResponse)
                return object;
            let message = new $root.kappa.GetGammaServiceVersionResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.GetGammaServiceVersionResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a GetGammaServiceVersionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.GetGammaServiceVersionResponse
         * @static
         * @param {kappa.GetGammaServiceVersionResponse} message GetGammaServiceVersionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGammaServiceVersionResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.version = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this GetGammaServiceVersionResponse to JSON.
         * @function toJSON
         * @memberof kappa.GetGammaServiceVersionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGammaServiceVersionResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGammaServiceVersionResponse;
    })();

    kappa.Chunk = (function() {

        /**
         * Properties of a Chunk.
         * @memberof kappa
         * @interface IChunk
         * @property {Uint8Array|null} [content] Chunk content
         */

        /**
         * Constructs a new Chunk.
         * @memberof kappa
         * @classdesc Represents a Chunk.
         * @implements IChunk
         * @constructor
         * @param {kappa.IChunk=} [properties] Properties to set
         */
        function Chunk(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chunk content.
         * @member {Uint8Array} content
         * @memberof kappa.Chunk
         * @instance
         */
        Chunk.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new Chunk instance using the specified properties.
         * @function create
         * @memberof kappa.Chunk
         * @static
         * @param {kappa.IChunk=} [properties] Properties to set
         * @returns {kappa.Chunk} Chunk instance
         */
        Chunk.create = function create(properties) {
            return new Chunk(properties);
        };

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link kappa.Chunk.verify|verify} messages.
         * @function encode
         * @memberof kappa.Chunk
         * @static
         * @param {kappa.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link kappa.Chunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.Chunk
         * @static
         * @param {kappa.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.Chunk();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chunk message.
         * @function verify
         * @memberof kappa.Chunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chunk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.Chunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.Chunk} Chunk
         */
        Chunk.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.Chunk)
                return object;
            let message = new $root.kappa.Chunk();
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.Chunk
         * @static
         * @param {kappa.Chunk} message Chunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chunk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this Chunk to JSON.
         * @function toJSON
         * @memberof kappa.Chunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chunk;
    })();

    kappa.BentoUri = (function() {

        /**
         * Properties of a BentoUri.
         * @memberof kappa
         * @interface IBentoUri
         * @property {kappa.BentoUri.StorageType|null} [type] BentoUri type
         * @property {string|null} [uri] BentoUri uri
         * @property {string|null} [s3_presigned_url] BentoUri s3_presigned_url
         * @property {string|null} [gcs_presigned_url] BentoUri gcs_presigned_url
         * @property {string|null} [oci_presigned_url] BentoUri oci_presigned_url
         */

        /**
         * Constructs a new BentoUri.
         * @memberof kappa
         * @classdesc Represents a BentoUri.
         * @implements IBentoUri
         * @constructor
         * @param {kappa.IBentoUri=} [properties] Properties to set
         */
        function BentoUri(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BentoUri type.
         * @member {kappa.BentoUri.StorageType} type
         * @memberof kappa.BentoUri
         * @instance
         */
        BentoUri.prototype.type = 0;

        /**
         * BentoUri uri.
         * @member {string} uri
         * @memberof kappa.BentoUri
         * @instance
         */
        BentoUri.prototype.uri = "";

        /**
         * BentoUri s3_presigned_url.
         * @member {string} s3_presigned_url
         * @memberof kappa.BentoUri
         * @instance
         */
        BentoUri.prototype.s3_presigned_url = "";

        /**
         * BentoUri gcs_presigned_url.
         * @member {string} gcs_presigned_url
         * @memberof kappa.BentoUri
         * @instance
         */
        BentoUri.prototype.gcs_presigned_url = "";

        /**
         * BentoUri oci_presigned_url.
         * @member {string} oci_presigned_url
         * @memberof kappa.BentoUri
         * @instance
         */
        BentoUri.prototype.oci_presigned_url = "";

        /**
         * Creates a new BentoUri instance using the specified properties.
         * @function create
         * @memberof kappa.BentoUri
         * @static
         * @param {kappa.IBentoUri=} [properties] Properties to set
         * @returns {kappa.BentoUri} BentoUri instance
         */
        BentoUri.create = function create(properties) {
            return new BentoUri(properties);
        };

        /**
         * Encodes the specified BentoUri message. Does not implicitly {@link kappa.BentoUri.verify|verify} messages.
         * @function encode
         * @memberof kappa.BentoUri
         * @static
         * @param {kappa.IBentoUri} message BentoUri message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BentoUri.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uri);
            if (message.s3_presigned_url != null && Object.hasOwnProperty.call(message, "s3_presigned_url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.s3_presigned_url);
            if (message.gcs_presigned_url != null && Object.hasOwnProperty.call(message, "gcs_presigned_url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gcs_presigned_url);
            if (message.oci_presigned_url != null && Object.hasOwnProperty.call(message, "oci_presigned_url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.oci_presigned_url);
            return writer;
        };

        /**
         * Encodes the specified BentoUri message, length delimited. Does not implicitly {@link kappa.BentoUri.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.BentoUri
         * @static
         * @param {kappa.IBentoUri} message BentoUri message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BentoUri.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BentoUri message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.BentoUri
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.BentoUri} BentoUri
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BentoUri.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.BentoUri();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.uri = reader.string();
                    break;
                case 3:
                    message.s3_presigned_url = reader.string();
                    break;
                case 4:
                    message.gcs_presigned_url = reader.string();
                    break;
                case 5:
                    message.oci_presigned_url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BentoUri message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.BentoUri
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.BentoUri} BentoUri
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BentoUri.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BentoUri message.
         * @function verify
         * @memberof kappa.BentoUri
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BentoUri.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            if (message.s3_presigned_url != null && message.hasOwnProperty("s3_presigned_url"))
                if (!$util.isString(message.s3_presigned_url))
                    return "s3_presigned_url: string expected";
            if (message.gcs_presigned_url != null && message.hasOwnProperty("gcs_presigned_url"))
                if (!$util.isString(message.gcs_presigned_url))
                    return "gcs_presigned_url: string expected";
            if (message.oci_presigned_url != null && message.hasOwnProperty("oci_presigned_url"))
                if (!$util.isString(message.oci_presigned_url))
                    return "oci_presigned_url: string expected";
            return null;
        };

        /**
         * Creates a BentoUri message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.BentoUri
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.BentoUri} BentoUri
         */
        BentoUri.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.BentoUri)
                return object;
            let message = new $root.kappa.BentoUri();
            switch (object.type) {
            case "UNSET":
            case 0:
                message.type = 0;
                break;
            case "LOCAL":
            case 1:
                message.type = 1;
                break;
            case "S3":
            case 2:
                message.type = 2;
                break;
            case "GCS":
            case 3:
                message.type = 3;
                break;
            case "AZURE_BLOB_STORAGE":
            case 4:
                message.type = 4;
                break;
            case "HDFS":
            case 5:
                message.type = 5;
                break;
            case "OCI":
            case 6:
                message.type = 6;
                break;
            }
            if (object.uri != null)
                message.uri = String(object.uri);
            if (object.s3_presigned_url != null)
                message.s3_presigned_url = String(object.s3_presigned_url);
            if (object.gcs_presigned_url != null)
                message.gcs_presigned_url = String(object.gcs_presigned_url);
            if (object.oci_presigned_url != null)
                message.oci_presigned_url = String(object.oci_presigned_url);
            return message;
        };

        /**
         * Creates a plain object from a BentoUri message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.BentoUri
         * @static
         * @param {kappa.BentoUri} message BentoUri
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BentoUri.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNSET" : 0;
                object.uri = "";
                object.s3_presigned_url = "";
                object.gcs_presigned_url = "";
                object.oci_presigned_url = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.kappa.BentoUri.StorageType[message.type] : message.type;
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            if (message.s3_presigned_url != null && message.hasOwnProperty("s3_presigned_url"))
                object.s3_presigned_url = message.s3_presigned_url;
            if (message.gcs_presigned_url != null && message.hasOwnProperty("gcs_presigned_url"))
                object.gcs_presigned_url = message.gcs_presigned_url;
            if (message.oci_presigned_url != null && message.hasOwnProperty("oci_presigned_url"))
                object.oci_presigned_url = message.oci_presigned_url;
            return object;
        };

        /**
         * Converts this BentoUri to JSON.
         * @function toJSON
         * @memberof kappa.BentoUri
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BentoUri.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * StorageType enum.
         * @name kappa.BentoUri.StorageType
         * @enum {number}
         * @property {number} UNSET=0 UNSET value
         * @property {number} LOCAL=1 LOCAL value
         * @property {number} S3=2 S3 value
         * @property {number} GCS=3 GCS value
         * @property {number} AZURE_BLOB_STORAGE=4 AZURE_BLOB_STORAGE value
         * @property {number} HDFS=5 HDFS value
         * @property {number} OCI=6 OCI value
         */
        BentoUri.StorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSET"] = 0;
            values[valuesById[1] = "LOCAL"] = 1;
            values[valuesById[2] = "S3"] = 2;
            values[valuesById[3] = "GCS"] = 3;
            values[valuesById[4] = "AZURE_BLOB_STORAGE"] = 4;
            values[valuesById[5] = "HDFS"] = 5;
            values[valuesById[6] = "OCI"] = 6;
            return values;
        })();

        return BentoUri;
    })();

    kappa.MyModelMetadata = (function() {

        /**
         * Properties of a MyModelMetadata.
         * @memberof kappa
         * @interface IMyModelMetadata
         * @property {string|null} [name] MyModelMetadata name
         * @property {string|null} [version] MyModelMetadata version
         * @property {google.protobuf.ITimestamp|null} [created_at] MyModelMetadata created_at
         * @property {kappa.MyModelMetadata.IMyModelEnv|null} [env] MyModelMetadata env
         * @property {Array.<kappa.MyModelMetadata.IBentoArtifact>|null} [artifacts] MyModelMetadata artifacts
         * @property {Array.<kappa.MyModelMetadata.IMyModelApi>|null} [apis] MyModelMetadata apis
         * @property {Object.<string,string>|null} [labels] MyModelMetadata labels
         */

        /**
         * Constructs a new MyModelMetadata.
         * @memberof kappa
         * @classdesc Represents a MyModelMetadata.
         * @implements IMyModelMetadata
         * @constructor
         * @param {kappa.IMyModelMetadata=} [properties] Properties to set
         */
        function MyModelMetadata(properties) {
            this.artifacts = [];
            this.apis = [];
            this.labels = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MyModelMetadata name.
         * @member {string} name
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.name = "";

        /**
         * MyModelMetadata version.
         * @member {string} version
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.version = "";

        /**
         * MyModelMetadata created_at.
         * @member {google.protobuf.ITimestamp|null|undefined} created_at
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.created_at = null;

        /**
         * MyModelMetadata env.
         * @member {kappa.MyModelMetadata.IMyModelEnv|null|undefined} env
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.env = null;

        /**
         * MyModelMetadata artifacts.
         * @member {Array.<kappa.MyModelMetadata.IBentoArtifact>} artifacts
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.artifacts = $util.emptyArray;

        /**
         * MyModelMetadata apis.
         * @member {Array.<kappa.MyModelMetadata.IMyModelApi>} apis
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.apis = $util.emptyArray;

        /**
         * MyModelMetadata labels.
         * @member {Object.<string,string>} labels
         * @memberof kappa.MyModelMetadata
         * @instance
         */
        MyModelMetadata.prototype.labels = $util.emptyObject;

        /**
         * Creates a new MyModelMetadata instance using the specified properties.
         * @function create
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {kappa.IMyModelMetadata=} [properties] Properties to set
         * @returns {kappa.MyModelMetadata} MyModelMetadata instance
         */
        MyModelMetadata.create = function create(properties) {
            return new MyModelMetadata(properties);
        };

        /**
         * Encodes the specified MyModelMetadata message. Does not implicitly {@link kappa.MyModelMetadata.verify|verify} messages.
         * @function encode
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {kappa.IMyModelMetadata} message MyModelMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyModelMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.env != null && Object.hasOwnProperty.call(message, "env"))
                $root.kappa.MyModelMetadata.MyModelEnv.encode(message.env, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.artifacts != null && message.artifacts.length)
                for (let i = 0; i < message.artifacts.length; ++i)
                    $root.kappa.MyModelMetadata.BentoArtifact.encode(message.artifacts[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.apis != null && message.apis.length)
                for (let i = 0; i < message.apis.length; ++i)
                    $root.kappa.MyModelMetadata.MyModelApi.encode(message.apis[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                for (let keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MyModelMetadata message, length delimited. Does not implicitly {@link kappa.MyModelMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {kappa.IMyModelMetadata} message MyModelMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyModelMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MyModelMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.MyModelMetadata} MyModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyModelMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.MyModelMetadata(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.env = $root.kappa.MyModelMetadata.MyModelEnv.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.artifacts && message.artifacts.length))
                        message.artifacts = [];
                    message.artifacts.push($root.kappa.MyModelMetadata.BentoArtifact.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.apis && message.apis.length))
                        message.apis = [];
                    message.apis.push($root.kappa.MyModelMetadata.MyModelApi.decode(reader, reader.uint32()));
                    break;
                case 7:
                    reader.skip().pos++;
                    if (message.labels === $util.emptyObject)
                        message.labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.labels[key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MyModelMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.MyModelMetadata} MyModelMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyModelMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MyModelMetadata message.
         * @function verify
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MyModelMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.created_at != null && message.hasOwnProperty("created_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                if (error)
                    return "created_at." + error;
            }
            if (message.env != null && message.hasOwnProperty("env")) {
                let error = $root.kappa.MyModelMetadata.MyModelEnv.verify(message.env);
                if (error)
                    return "env." + error;
            }
            if (message.artifacts != null && message.hasOwnProperty("artifacts")) {
                if (!Array.isArray(message.artifacts))
                    return "artifacts: array expected";
                for (let i = 0; i < message.artifacts.length; ++i) {
                    let error = $root.kappa.MyModelMetadata.BentoArtifact.verify(message.artifacts[i]);
                    if (error)
                        return "artifacts." + error;
                }
            }
            if (message.apis != null && message.hasOwnProperty("apis")) {
                if (!Array.isArray(message.apis))
                    return "apis: array expected";
                for (let i = 0; i < message.apis.length; ++i) {
                    let error = $root.kappa.MyModelMetadata.MyModelApi.verify(message.apis[i]);
                    if (error)
                        return "apis." + error;
                }
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!$util.isObject(message.labels))
                    return "labels: object expected";
                let key = Object.keys(message.labels);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.labels[key[i]]))
                        return "labels: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a MyModelMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.MyModelMetadata} MyModelMetadata
         */
        MyModelMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.MyModelMetadata)
                return object;
            let message = new $root.kappa.MyModelMetadata();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object.created_at != null) {
                if (typeof object.created_at !== "object")
                    throw TypeError(".kappa.MyModelMetadata.created_at: object expected");
                message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
            }
            if (object.env != null) {
                if (typeof object.env !== "object")
                    throw TypeError(".kappa.MyModelMetadata.env: object expected");
                message.env = $root.kappa.MyModelMetadata.MyModelEnv.fromObject(object.env);
            }
            if (object.artifacts) {
                if (!Array.isArray(object.artifacts))
                    throw TypeError(".kappa.MyModelMetadata.artifacts: array expected");
                message.artifacts = [];
                for (let i = 0; i < object.artifacts.length; ++i) {
                    if (typeof object.artifacts[i] !== "object")
                        throw TypeError(".kappa.MyModelMetadata.artifacts: object expected");
                    message.artifacts[i] = $root.kappa.MyModelMetadata.BentoArtifact.fromObject(object.artifacts[i]);
                }
            }
            if (object.apis) {
                if (!Array.isArray(object.apis))
                    throw TypeError(".kappa.MyModelMetadata.apis: array expected");
                message.apis = [];
                for (let i = 0; i < object.apis.length; ++i) {
                    if (typeof object.apis[i] !== "object")
                        throw TypeError(".kappa.MyModelMetadata.apis: object expected");
                    message.apis[i] = $root.kappa.MyModelMetadata.MyModelApi.fromObject(object.apis[i]);
                }
            }
            if (object.labels) {
                if (typeof object.labels !== "object")
                    throw TypeError(".kappa.MyModelMetadata.labels: object expected");
                message.labels = {};
                for (let keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                    message.labels[keys[i]] = String(object.labels[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a MyModelMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.MyModelMetadata
         * @static
         * @param {kappa.MyModelMetadata} message MyModelMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MyModelMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.artifacts = [];
                object.apis = [];
            }
            if (options.objects || options.defaults)
                object.labels = {};
            if (options.defaults) {
                object.name = "";
                object.version = "";
                object.created_at = null;
                object.env = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.created_at != null && message.hasOwnProperty("created_at"))
                object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
            if (message.env != null && message.hasOwnProperty("env"))
                object.env = $root.kappa.MyModelMetadata.MyModelEnv.toObject(message.env, options);
            if (message.artifacts && message.artifacts.length) {
                object.artifacts = [];
                for (let j = 0; j < message.artifacts.length; ++j)
                    object.artifacts[j] = $root.kappa.MyModelMetadata.BentoArtifact.toObject(message.artifacts[j], options);
            }
            if (message.apis && message.apis.length) {
                object.apis = [];
                for (let j = 0; j < message.apis.length; ++j)
                    object.apis[j] = $root.kappa.MyModelMetadata.MyModelApi.toObject(message.apis[j], options);
            }
            let keys2;
            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                object.labels = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.labels[keys2[j]] = message.labels[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this MyModelMetadata to JSON.
         * @function toJSON
         * @memberof kappa.MyModelMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MyModelMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MyModelMetadata.MyModelEnv = (function() {

            /**
             * Properties of a MyModelEnv.
             * @memberof kappa.MyModelMetadata
             * @interface IMyModelEnv
             * @property {string|null} [setup_sh] MyModelEnv setup_sh
             * @property {string|null} [conda_env] MyModelEnv conda_env
             * @property {string|null} [pip_dependencies] MyModelEnv pip_dependencies
             * @property {string|null} [python_version] MyModelEnv python_version
             * @property {string|null} [docker_base_image] MyModelEnv docker_base_image
             * @property {Array.<string>|null} [pip_packages] MyModelEnv pip_packages
             * @property {string|null} [requirements_txt] MyModelEnv requirements_txt
             */

            /**
             * Constructs a new MyModelEnv.
             * @memberof kappa.MyModelMetadata
             * @classdesc Represents a MyModelEnv.
             * @implements IMyModelEnv
             * @constructor
             * @param {kappa.MyModelMetadata.IMyModelEnv=} [properties] Properties to set
             */
            function MyModelEnv(properties) {
                this.pip_packages = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyModelEnv setup_sh.
             * @member {string} setup_sh
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.setup_sh = "";

            /**
             * MyModelEnv conda_env.
             * @member {string} conda_env
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.conda_env = "";

            /**
             * MyModelEnv pip_dependencies.
             * @member {string} pip_dependencies
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.pip_dependencies = "";

            /**
             * MyModelEnv python_version.
             * @member {string} python_version
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.python_version = "";

            /**
             * MyModelEnv docker_base_image.
             * @member {string} docker_base_image
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.docker_base_image = "";

            /**
             * MyModelEnv pip_packages.
             * @member {Array.<string>} pip_packages
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.pip_packages = $util.emptyArray;

            /**
             * MyModelEnv requirements_txt.
             * @member {string} requirements_txt
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             */
            MyModelEnv.prototype.requirements_txt = "";

            /**
             * Creates a new MyModelEnv instance using the specified properties.
             * @function create
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {kappa.MyModelMetadata.IMyModelEnv=} [properties] Properties to set
             * @returns {kappa.MyModelMetadata.MyModelEnv} MyModelEnv instance
             */
            MyModelEnv.create = function create(properties) {
                return new MyModelEnv(properties);
            };

            /**
             * Encodes the specified MyModelEnv message. Does not implicitly {@link kappa.MyModelMetadata.MyModelEnv.verify|verify} messages.
             * @function encode
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {kappa.MyModelMetadata.IMyModelEnv} message MyModelEnv message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyModelEnv.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.setup_sh != null && Object.hasOwnProperty.call(message, "setup_sh"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.setup_sh);
                if (message.conda_env != null && Object.hasOwnProperty.call(message, "conda_env"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.conda_env);
                if (message.pip_dependencies != null && Object.hasOwnProperty.call(message, "pip_dependencies"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.pip_dependencies);
                if (message.python_version != null && Object.hasOwnProperty.call(message, "python_version"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.python_version);
                if (message.docker_base_image != null && Object.hasOwnProperty.call(message, "docker_base_image"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.docker_base_image);
                if (message.pip_packages != null && message.pip_packages.length)
                    for (let i = 0; i < message.pip_packages.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.pip_packages[i]);
                if (message.requirements_txt != null && Object.hasOwnProperty.call(message, "requirements_txt"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.requirements_txt);
                return writer;
            };

            /**
             * Encodes the specified MyModelEnv message, length delimited. Does not implicitly {@link kappa.MyModelMetadata.MyModelEnv.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {kappa.MyModelMetadata.IMyModelEnv} message MyModelEnv message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyModelEnv.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MyModelEnv message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.MyModelMetadata.MyModelEnv} MyModelEnv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyModelEnv.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.MyModelMetadata.MyModelEnv();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.setup_sh = reader.string();
                        break;
                    case 2:
                        message.conda_env = reader.string();
                        break;
                    case 3:
                        message.pip_dependencies = reader.string();
                        break;
                    case 4:
                        message.python_version = reader.string();
                        break;
                    case 5:
                        message.docker_base_image = reader.string();
                        break;
                    case 6:
                        if (!(message.pip_packages && message.pip_packages.length))
                            message.pip_packages = [];
                        message.pip_packages.push(reader.string());
                        break;
                    case 7:
                        message.requirements_txt = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MyModelEnv message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.MyModelMetadata.MyModelEnv} MyModelEnv
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyModelEnv.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MyModelEnv message.
             * @function verify
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MyModelEnv.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.setup_sh != null && message.hasOwnProperty("setup_sh"))
                    if (!$util.isString(message.setup_sh))
                        return "setup_sh: string expected";
                if (message.conda_env != null && message.hasOwnProperty("conda_env"))
                    if (!$util.isString(message.conda_env))
                        return "conda_env: string expected";
                if (message.pip_dependencies != null && message.hasOwnProperty("pip_dependencies"))
                    if (!$util.isString(message.pip_dependencies))
                        return "pip_dependencies: string expected";
                if (message.python_version != null && message.hasOwnProperty("python_version"))
                    if (!$util.isString(message.python_version))
                        return "python_version: string expected";
                if (message.docker_base_image != null && message.hasOwnProperty("docker_base_image"))
                    if (!$util.isString(message.docker_base_image))
                        return "docker_base_image: string expected";
                if (message.pip_packages != null && message.hasOwnProperty("pip_packages")) {
                    if (!Array.isArray(message.pip_packages))
                        return "pip_packages: array expected";
                    for (let i = 0; i < message.pip_packages.length; ++i)
                        if (!$util.isString(message.pip_packages[i]))
                            return "pip_packages: string[] expected";
                }
                if (message.requirements_txt != null && message.hasOwnProperty("requirements_txt"))
                    if (!$util.isString(message.requirements_txt))
                        return "requirements_txt: string expected";
                return null;
            };

            /**
             * Creates a MyModelEnv message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.MyModelMetadata.MyModelEnv} MyModelEnv
             */
            MyModelEnv.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.MyModelMetadata.MyModelEnv)
                    return object;
                let message = new $root.kappa.MyModelMetadata.MyModelEnv();
                if (object.setup_sh != null)
                    message.setup_sh = String(object.setup_sh);
                if (object.conda_env != null)
                    message.conda_env = String(object.conda_env);
                if (object.pip_dependencies != null)
                    message.pip_dependencies = String(object.pip_dependencies);
                if (object.python_version != null)
                    message.python_version = String(object.python_version);
                if (object.docker_base_image != null)
                    message.docker_base_image = String(object.docker_base_image);
                if (object.pip_packages) {
                    if (!Array.isArray(object.pip_packages))
                        throw TypeError(".kappa.MyModelMetadata.MyModelEnv.pip_packages: array expected");
                    message.pip_packages = [];
                    for (let i = 0; i < object.pip_packages.length; ++i)
                        message.pip_packages[i] = String(object.pip_packages[i]);
                }
                if (object.requirements_txt != null)
                    message.requirements_txt = String(object.requirements_txt);
                return message;
            };

            /**
             * Creates a plain object from a MyModelEnv message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @static
             * @param {kappa.MyModelMetadata.MyModelEnv} message MyModelEnv
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MyModelEnv.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.pip_packages = [];
                if (options.defaults) {
                    object.setup_sh = "";
                    object.conda_env = "";
                    object.pip_dependencies = "";
                    object.python_version = "";
                    object.docker_base_image = "";
                    object.requirements_txt = "";
                }
                if (message.setup_sh != null && message.hasOwnProperty("setup_sh"))
                    object.setup_sh = message.setup_sh;
                if (message.conda_env != null && message.hasOwnProperty("conda_env"))
                    object.conda_env = message.conda_env;
                if (message.pip_dependencies != null && message.hasOwnProperty("pip_dependencies"))
                    object.pip_dependencies = message.pip_dependencies;
                if (message.python_version != null && message.hasOwnProperty("python_version"))
                    object.python_version = message.python_version;
                if (message.docker_base_image != null && message.hasOwnProperty("docker_base_image"))
                    object.docker_base_image = message.docker_base_image;
                if (message.pip_packages && message.pip_packages.length) {
                    object.pip_packages = [];
                    for (let j = 0; j < message.pip_packages.length; ++j)
                        object.pip_packages[j] = message.pip_packages[j];
                }
                if (message.requirements_txt != null && message.hasOwnProperty("requirements_txt"))
                    object.requirements_txt = message.requirements_txt;
                return object;
            };

            /**
             * Converts this MyModelEnv to JSON.
             * @function toJSON
             * @memberof kappa.MyModelMetadata.MyModelEnv
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MyModelEnv.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MyModelEnv;
        })();

        MyModelMetadata.BentoArtifact = (function() {

            /**
             * Properties of a BentoArtifact.
             * @memberof kappa.MyModelMetadata
             * @interface IBentoArtifact
             * @property {string|null} [name] BentoArtifact name
             * @property {string|null} [artifact_type] BentoArtifact artifact_type
             * @property {google.protobuf.IStruct|null} [metadata] BentoArtifact metadata
             */

            /**
             * Constructs a new BentoArtifact.
             * @memberof kappa.MyModelMetadata
             * @classdesc Represents a BentoArtifact.
             * @implements IBentoArtifact
             * @constructor
             * @param {kappa.MyModelMetadata.IBentoArtifact=} [properties] Properties to set
             */
            function BentoArtifact(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BentoArtifact name.
             * @member {string} name
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @instance
             */
            BentoArtifact.prototype.name = "";

            /**
             * BentoArtifact artifact_type.
             * @member {string} artifact_type
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @instance
             */
            BentoArtifact.prototype.artifact_type = "";

            /**
             * BentoArtifact metadata.
             * @member {google.protobuf.IStruct|null|undefined} metadata
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @instance
             */
            BentoArtifact.prototype.metadata = null;

            /**
             * Creates a new BentoArtifact instance using the specified properties.
             * @function create
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {kappa.MyModelMetadata.IBentoArtifact=} [properties] Properties to set
             * @returns {kappa.MyModelMetadata.BentoArtifact} BentoArtifact instance
             */
            BentoArtifact.create = function create(properties) {
                return new BentoArtifact(properties);
            };

            /**
             * Encodes the specified BentoArtifact message. Does not implicitly {@link kappa.MyModelMetadata.BentoArtifact.verify|verify} messages.
             * @function encode
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {kappa.MyModelMetadata.IBentoArtifact} message BentoArtifact message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BentoArtifact.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.artifact_type != null && Object.hasOwnProperty.call(message, "artifact_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.artifact_type);
                if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                    $root.google.protobuf.Struct.encode(message.metadata, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BentoArtifact message, length delimited. Does not implicitly {@link kappa.MyModelMetadata.BentoArtifact.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {kappa.MyModelMetadata.IBentoArtifact} message BentoArtifact message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BentoArtifact.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BentoArtifact message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.MyModelMetadata.BentoArtifact} BentoArtifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BentoArtifact.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.MyModelMetadata.BentoArtifact();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.artifact_type = reader.string();
                        break;
                    case 3:
                        message.metadata = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BentoArtifact message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.MyModelMetadata.BentoArtifact} BentoArtifact
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BentoArtifact.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BentoArtifact message.
             * @function verify
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BentoArtifact.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.artifact_type != null && message.hasOwnProperty("artifact_type"))
                    if (!$util.isString(message.artifact_type))
                        return "artifact_type: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    let error = $root.google.protobuf.Struct.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                return null;
            };

            /**
             * Creates a BentoArtifact message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.MyModelMetadata.BentoArtifact} BentoArtifact
             */
            BentoArtifact.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.MyModelMetadata.BentoArtifact)
                    return object;
                let message = new $root.kappa.MyModelMetadata.BentoArtifact();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.artifact_type != null)
                    message.artifact_type = String(object.artifact_type);
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".kappa.MyModelMetadata.BentoArtifact.metadata: object expected");
                    message.metadata = $root.google.protobuf.Struct.fromObject(object.metadata);
                }
                return message;
            };

            /**
             * Creates a plain object from a BentoArtifact message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @static
             * @param {kappa.MyModelMetadata.BentoArtifact} message BentoArtifact
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BentoArtifact.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.artifact_type = "";
                    object.metadata = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.artifact_type != null && message.hasOwnProperty("artifact_type"))
                    object.artifact_type = message.artifact_type;
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = $root.google.protobuf.Struct.toObject(message.metadata, options);
                return object;
            };

            /**
             * Converts this BentoArtifact to JSON.
             * @function toJSON
             * @memberof kappa.MyModelMetadata.BentoArtifact
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BentoArtifact.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BentoArtifact;
        })();

        MyModelMetadata.MyModelApi = (function() {

            /**
             * Properties of a MyModelApi.
             * @memberof kappa.MyModelMetadata
             * @interface IMyModelApi
             * @property {string|null} [name] MyModelApi name
             * @property {string|null} [input_type] MyModelApi input_type
             * @property {string|null} [docs] MyModelApi docs
             * @property {google.protobuf.IStruct|null} [input_config] MyModelApi input_config
             * @property {google.protobuf.IStruct|null} [output_config] MyModelApi output_config
             * @property {string|null} [output_type] MyModelApi output_type
             * @property {number|null} [mb_max_latency] MyModelApi mb_max_latency
             * @property {number|null} [mb_max_batch_size] MyModelApi mb_max_batch_size
             * @property {boolean|null} [batch] MyModelApi batch
             * @property {string|null} [route] MyModelApi route
             */

            /**
             * Constructs a new MyModelApi.
             * @memberof kappa.MyModelMetadata
             * @classdesc Represents a MyModelApi.
             * @implements IMyModelApi
             * @constructor
             * @param {kappa.MyModelMetadata.IMyModelApi=} [properties] Properties to set
             */
            function MyModelApi(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyModelApi name.
             * @member {string} name
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.name = "";

            /**
             * MyModelApi input_type.
             * @member {string} input_type
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.input_type = "";

            /**
             * MyModelApi docs.
             * @member {string} docs
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.docs = "";

            /**
             * MyModelApi input_config.
             * @member {google.protobuf.IStruct|null|undefined} input_config
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.input_config = null;

            /**
             * MyModelApi output_config.
             * @member {google.protobuf.IStruct|null|undefined} output_config
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.output_config = null;

            /**
             * MyModelApi output_type.
             * @member {string} output_type
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.output_type = "";

            /**
             * MyModelApi mb_max_latency.
             * @member {number} mb_max_latency
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.mb_max_latency = 0;

            /**
             * MyModelApi mb_max_batch_size.
             * @member {number} mb_max_batch_size
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.mb_max_batch_size = 0;

            /**
             * MyModelApi batch.
             * @member {boolean} batch
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.batch = false;

            /**
             * MyModelApi route.
             * @member {string} route
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             */
            MyModelApi.prototype.route = "";

            /**
             * Creates a new MyModelApi instance using the specified properties.
             * @function create
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {kappa.MyModelMetadata.IMyModelApi=} [properties] Properties to set
             * @returns {kappa.MyModelMetadata.MyModelApi} MyModelApi instance
             */
            MyModelApi.create = function create(properties) {
                return new MyModelApi(properties);
            };

            /**
             * Encodes the specified MyModelApi message. Does not implicitly {@link kappa.MyModelMetadata.MyModelApi.verify|verify} messages.
             * @function encode
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {kappa.MyModelMetadata.IMyModelApi} message MyModelApi message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyModelApi.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.docs != null && Object.hasOwnProperty.call(message, "docs"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.docs);
                if (message.input_config != null && Object.hasOwnProperty.call(message, "input_config"))
                    $root.google.protobuf.Struct.encode(message.input_config, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.output_config != null && Object.hasOwnProperty.call(message, "output_config"))
                    $root.google.protobuf.Struct.encode(message.output_config, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.output_type);
                if (message.mb_max_latency != null && Object.hasOwnProperty.call(message, "mb_max_latency"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.mb_max_latency);
                if (message.mb_max_batch_size != null && Object.hasOwnProperty.call(message, "mb_max_batch_size"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.mb_max_batch_size);
                if (message.batch != null && Object.hasOwnProperty.call(message, "batch"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.batch);
                if (message.route != null && Object.hasOwnProperty.call(message, "route"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.route);
                return writer;
            };

            /**
             * Encodes the specified MyModelApi message, length delimited. Does not implicitly {@link kappa.MyModelMetadata.MyModelApi.verify|verify} messages.
             * @function encodeDelimited
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {kappa.MyModelMetadata.IMyModelApi} message MyModelApi message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyModelApi.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MyModelApi message from the specified reader or buffer.
             * @function decode
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {kappa.MyModelMetadata.MyModelApi} MyModelApi
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyModelApi.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.MyModelMetadata.MyModelApi();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.input_type = reader.string();
                        break;
                    case 3:
                        message.docs = reader.string();
                        break;
                    case 4:
                        message.input_config = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.output_config = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.output_type = reader.string();
                        break;
                    case 7:
                        message.mb_max_latency = reader.int32();
                        break;
                    case 8:
                        message.mb_max_batch_size = reader.int32();
                        break;
                    case 9:
                        message.batch = reader.bool();
                        break;
                    case 10:
                        message.route = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MyModelApi message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {kappa.MyModelMetadata.MyModelApi} MyModelApi
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyModelApi.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MyModelApi message.
             * @function verify
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MyModelApi.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    if (!$util.isString(message.input_type))
                        return "input_type: string expected";
                if (message.docs != null && message.hasOwnProperty("docs"))
                    if (!$util.isString(message.docs))
                        return "docs: string expected";
                if (message.input_config != null && message.hasOwnProperty("input_config")) {
                    let error = $root.google.protobuf.Struct.verify(message.input_config);
                    if (error)
                        return "input_config." + error;
                }
                if (message.output_config != null && message.hasOwnProperty("output_config")) {
                    let error = $root.google.protobuf.Struct.verify(message.output_config);
                    if (error)
                        return "output_config." + error;
                }
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    if (!$util.isString(message.output_type))
                        return "output_type: string expected";
                if (message.mb_max_latency != null && message.hasOwnProperty("mb_max_latency"))
                    if (!$util.isInteger(message.mb_max_latency))
                        return "mb_max_latency: integer expected";
                if (message.mb_max_batch_size != null && message.hasOwnProperty("mb_max_batch_size"))
                    if (!$util.isInteger(message.mb_max_batch_size))
                        return "mb_max_batch_size: integer expected";
                if (message.batch != null && message.hasOwnProperty("batch"))
                    if (typeof message.batch !== "boolean")
                        return "batch: boolean expected";
                if (message.route != null && message.hasOwnProperty("route"))
                    if (!$util.isString(message.route))
                        return "route: string expected";
                return null;
            };

            /**
             * Creates a MyModelApi message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {kappa.MyModelMetadata.MyModelApi} MyModelApi
             */
            MyModelApi.fromObject = function fromObject(object) {
                if (object instanceof $root.kappa.MyModelMetadata.MyModelApi)
                    return object;
                let message = new $root.kappa.MyModelMetadata.MyModelApi();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.input_type != null)
                    message.input_type = String(object.input_type);
                if (object.docs != null)
                    message.docs = String(object.docs);
                if (object.input_config != null) {
                    if (typeof object.input_config !== "object")
                        throw TypeError(".kappa.MyModelMetadata.MyModelApi.input_config: object expected");
                    message.input_config = $root.google.protobuf.Struct.fromObject(object.input_config);
                }
                if (object.output_config != null) {
                    if (typeof object.output_config !== "object")
                        throw TypeError(".kappa.MyModelMetadata.MyModelApi.output_config: object expected");
                    message.output_config = $root.google.protobuf.Struct.fromObject(object.output_config);
                }
                if (object.output_type != null)
                    message.output_type = String(object.output_type);
                if (object.mb_max_latency != null)
                    message.mb_max_latency = object.mb_max_latency | 0;
                if (object.mb_max_batch_size != null)
                    message.mb_max_batch_size = object.mb_max_batch_size | 0;
                if (object.batch != null)
                    message.batch = Boolean(object.batch);
                if (object.route != null)
                    message.route = String(object.route);
                return message;
            };

            /**
             * Creates a plain object from a MyModelApi message. Also converts values to other types if specified.
             * @function toObject
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @static
             * @param {kappa.MyModelMetadata.MyModelApi} message MyModelApi
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MyModelApi.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.input_type = "";
                    object.docs = "";
                    object.input_config = null;
                    object.output_config = null;
                    object.output_type = "";
                    object.mb_max_latency = 0;
                    object.mb_max_batch_size = 0;
                    object.batch = false;
                    object.route = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.input_type != null && message.hasOwnProperty("input_type"))
                    object.input_type = message.input_type;
                if (message.docs != null && message.hasOwnProperty("docs"))
                    object.docs = message.docs;
                if (message.input_config != null && message.hasOwnProperty("input_config"))
                    object.input_config = $root.google.protobuf.Struct.toObject(message.input_config, options);
                if (message.output_config != null && message.hasOwnProperty("output_config"))
                    object.output_config = $root.google.protobuf.Struct.toObject(message.output_config, options);
                if (message.output_type != null && message.hasOwnProperty("output_type"))
                    object.output_type = message.output_type;
                if (message.mb_max_latency != null && message.hasOwnProperty("mb_max_latency"))
                    object.mb_max_latency = message.mb_max_latency;
                if (message.mb_max_batch_size != null && message.hasOwnProperty("mb_max_batch_size"))
                    object.mb_max_batch_size = message.mb_max_batch_size;
                if (message.batch != null && message.hasOwnProperty("batch"))
                    object.batch = message.batch;
                if (message.route != null && message.hasOwnProperty("route"))
                    object.route = message.route;
                return object;
            };

            /**
             * Converts this MyModelApi to JSON.
             * @function toJSON
             * @memberof kappa.MyModelMetadata.MyModelApi
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MyModelApi.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MyModelApi;
        })();

        return MyModelMetadata;
    })();

    kappa.Bento = (function() {

        /**
         * Properties of a Bento.
         * @memberof kappa
         * @interface IBento
         * @property {string|null} [name] Bento name
         * @property {string|null} [version] Bento version
         * @property {kappa.IBentoUri|null} [uri] Bento uri
         * @property {kappa.IMyModelMetadata|null} [bento_service_metadata] Bento bento_service_metadata
         * @property {kappa.IUploadStatus|null} [status] Bento status
         */

        /**
         * Constructs a new Bento.
         * @memberof kappa
         * @classdesc Represents a Bento.
         * @implements IBento
         * @constructor
         * @param {kappa.IBento=} [properties] Properties to set
         */
        function Bento(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bento name.
         * @member {string} name
         * @memberof kappa.Bento
         * @instance
         */
        Bento.prototype.name = "";

        /**
         * Bento version.
         * @member {string} version
         * @memberof kappa.Bento
         * @instance
         */
        Bento.prototype.version = "";

        /**
         * Bento uri.
         * @member {kappa.IBentoUri|null|undefined} uri
         * @memberof kappa.Bento
         * @instance
         */
        Bento.prototype.uri = null;

        /**
         * Bento bento_service_metadata.
         * @member {kappa.IMyModelMetadata|null|undefined} bento_service_metadata
         * @memberof kappa.Bento
         * @instance
         */
        Bento.prototype.bento_service_metadata = null;

        /**
         * Bento status.
         * @member {kappa.IUploadStatus|null|undefined} status
         * @memberof kappa.Bento
         * @instance
         */
        Bento.prototype.status = null;

        /**
         * Creates a new Bento instance using the specified properties.
         * @function create
         * @memberof kappa.Bento
         * @static
         * @param {kappa.IBento=} [properties] Properties to set
         * @returns {kappa.Bento} Bento instance
         */
        Bento.create = function create(properties) {
            return new Bento(properties);
        };

        /**
         * Encodes the specified Bento message. Does not implicitly {@link kappa.Bento.verify|verify} messages.
         * @function encode
         * @memberof kappa.Bento
         * @static
         * @param {kappa.IBento} message Bento message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bento.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                $root.kappa.BentoUri.encode(message.uri, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.bento_service_metadata != null && Object.hasOwnProperty.call(message, "bento_service_metadata"))
                $root.kappa.MyModelMetadata.encode(message.bento_service_metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.UploadStatus.encode(message.status, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bento message, length delimited. Does not implicitly {@link kappa.Bento.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.Bento
         * @static
         * @param {kappa.IBento} message Bento message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bento.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bento message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.Bento
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.Bento} Bento
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bento.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.Bento();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.uri = $root.kappa.BentoUri.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bento_service_metadata = $root.kappa.MyModelMetadata.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = $root.kappa.UploadStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bento message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.Bento
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.Bento} Bento
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bento.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bento message.
         * @function verify
         * @memberof kappa.Bento
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bento.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.uri != null && message.hasOwnProperty("uri")) {
                let error = $root.kappa.BentoUri.verify(message.uri);
                if (error)
                    return "uri." + error;
            }
            if (message.bento_service_metadata != null && message.hasOwnProperty("bento_service_metadata")) {
                let error = $root.kappa.MyModelMetadata.verify(message.bento_service_metadata);
                if (error)
                    return "bento_service_metadata." + error;
            }
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.UploadStatus.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a Bento message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.Bento
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.Bento} Bento
         */
        Bento.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.Bento)
                return object;
            let message = new $root.kappa.Bento();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object.uri != null) {
                if (typeof object.uri !== "object")
                    throw TypeError(".kappa.Bento.uri: object expected");
                message.uri = $root.kappa.BentoUri.fromObject(object.uri);
            }
            if (object.bento_service_metadata != null) {
                if (typeof object.bento_service_metadata !== "object")
                    throw TypeError(".kappa.Bento.bento_service_metadata: object expected");
                message.bento_service_metadata = $root.kappa.MyModelMetadata.fromObject(object.bento_service_metadata);
            }
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.Bento.status: object expected");
                message.status = $root.kappa.UploadStatus.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a Bento message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.Bento
         * @static
         * @param {kappa.Bento} message Bento
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bento.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.version = "";
                object.uri = null;
                object.bento_service_metadata = null;
                object.status = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = $root.kappa.BentoUri.toObject(message.uri, options);
            if (message.bento_service_metadata != null && message.hasOwnProperty("bento_service_metadata"))
                object.bento_service_metadata = $root.kappa.MyModelMetadata.toObject(message.bento_service_metadata, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.UploadStatus.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this Bento to JSON.
         * @function toJSON
         * @memberof kappa.Bento
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bento.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bento;
    })();

    kappa.Project = (function() {

        /**
         * Properties of a Project.
         * @memberof kappa
         * @interface IProject
         * @property {string|null} [name] Project name
         * @property {string|null} [training_repo] Project training_repo
         * @property {string|null} [inference_repo] Project inference_repo
         */

        /**
         * Constructs a new Project.
         * @memberof kappa
         * @classdesc Represents a Project.
         * @implements IProject
         * @constructor
         * @param {kappa.IProject=} [properties] Properties to set
         */
        function Project(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Project name.
         * @member {string} name
         * @memberof kappa.Project
         * @instance
         */
        Project.prototype.name = "";

        /**
         * Project training_repo.
         * @member {string} training_repo
         * @memberof kappa.Project
         * @instance
         */
        Project.prototype.training_repo = "";

        /**
         * Project inference_repo.
         * @member {string} inference_repo
         * @memberof kappa.Project
         * @instance
         */
        Project.prototype.inference_repo = "";

        /**
         * Creates a new Project instance using the specified properties.
         * @function create
         * @memberof kappa.Project
         * @static
         * @param {kappa.IProject=} [properties] Properties to set
         * @returns {kappa.Project} Project instance
         */
        Project.create = function create(properties) {
            return new Project(properties);
        };

        /**
         * Encodes the specified Project message. Does not implicitly {@link kappa.Project.verify|verify} messages.
         * @function encode
         * @memberof kappa.Project
         * @static
         * @param {kappa.IProject} message Project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.training_repo != null && Object.hasOwnProperty.call(message, "training_repo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.training_repo);
            if (message.inference_repo != null && Object.hasOwnProperty.call(message, "inference_repo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.inference_repo);
            return writer;
        };

        /**
         * Encodes the specified Project message, length delimited. Does not implicitly {@link kappa.Project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.Project
         * @static
         * @param {kappa.IProject} message Project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Project message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.Project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.Project} Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.Project();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.training_repo = reader.string();
                    break;
                case 3:
                    message.inference_repo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.Project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.Project} Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Project message.
         * @function verify
         * @memberof kappa.Project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.training_repo != null && message.hasOwnProperty("training_repo"))
                if (!$util.isString(message.training_repo))
                    return "training_repo: string expected";
            if (message.inference_repo != null && message.hasOwnProperty("inference_repo"))
                if (!$util.isString(message.inference_repo))
                    return "inference_repo: string expected";
            return null;
        };

        /**
         * Creates a Project message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.Project
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.Project} Project
         */
        Project.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.Project)
                return object;
            let message = new $root.kappa.Project();
            if (object.name != null)
                message.name = String(object.name);
            if (object.training_repo != null)
                message.training_repo = String(object.training_repo);
            if (object.inference_repo != null)
                message.inference_repo = String(object.inference_repo);
            return message;
        };

        /**
         * Creates a plain object from a Project message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.Project
         * @static
         * @param {kappa.Project} message Project
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Project.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.training_repo = "";
                object.inference_repo = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.training_repo != null && message.hasOwnProperty("training_repo"))
                object.training_repo = message.training_repo;
            if (message.inference_repo != null && message.hasOwnProperty("inference_repo"))
                object.inference_repo = message.inference_repo;
            return object;
        };

        /**
         * Converts this Project to JSON.
         * @function toJSON
         * @memberof kappa.Project
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Project.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Project;
    })();

    kappa.AddBentoRequest = (function() {

        /**
         * Properties of an AddBentoRequest.
         * @memberof kappa
         * @interface IAddBentoRequest
         * @property {string|null} [bento_name] AddBentoRequest bento_name
         * @property {string|null} [bento_version] AddBentoRequest bento_version
         */

        /**
         * Constructs a new AddBentoRequest.
         * @memberof kappa
         * @classdesc Represents an AddBentoRequest.
         * @implements IAddBentoRequest
         * @constructor
         * @param {kappa.IAddBentoRequest=} [properties] Properties to set
         */
        function AddBentoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.AddBentoRequest
         * @instance
         */
        AddBentoRequest.prototype.bento_name = "";

        /**
         * AddBentoRequest bento_version.
         * @member {string} bento_version
         * @memberof kappa.AddBentoRequest
         * @instance
         */
        AddBentoRequest.prototype.bento_version = "";

        /**
         * Creates a new AddBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {kappa.IAddBentoRequest=} [properties] Properties to set
         * @returns {kappa.AddBentoRequest} AddBentoRequest instance
         */
        AddBentoRequest.create = function create(properties) {
            return new AddBentoRequest(properties);
        };

        /**
         * Encodes the specified AddBentoRequest message. Does not implicitly {@link kappa.AddBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {kappa.IAddBentoRequest} message AddBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            return writer;
        };

        /**
         * Encodes the specified AddBentoRequest message, length delimited. Does not implicitly {@link kappa.AddBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {kappa.IAddBentoRequest} message AddBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.AddBentoRequest} AddBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.AddBentoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.AddBentoRequest} AddBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddBentoRequest message.
         * @function verify
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            return null;
        };

        /**
         * Creates an AddBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.AddBentoRequest} AddBentoRequest
         */
        AddBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.AddBentoRequest)
                return object;
            let message = new $root.kappa.AddBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            return message;
        };

        /**
         * Creates a plain object from an AddBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.AddBentoRequest
         * @static
         * @param {kappa.AddBentoRequest} message AddBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            return object;
        };

        /**
         * Converts this AddBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.AddBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddBentoRequest;
    })();

    kappa.AddBentoResponse = (function() {

        /**
         * Properties of an AddBentoResponse.
         * @memberof kappa
         * @interface IAddBentoResponse
         * @property {kappa.IStatus|null} [status] AddBentoResponse status
         * @property {kappa.IBentoUri|null} [uri] AddBentoResponse uri
         */

        /**
         * Constructs a new AddBentoResponse.
         * @memberof kappa
         * @classdesc Represents an AddBentoResponse.
         * @implements IAddBentoResponse
         * @constructor
         * @param {kappa.IAddBentoResponse=} [properties] Properties to set
         */
        function AddBentoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.AddBentoResponse
         * @instance
         */
        AddBentoResponse.prototype.status = null;

        /**
         * AddBentoResponse uri.
         * @member {kappa.IBentoUri|null|undefined} uri
         * @memberof kappa.AddBentoResponse
         * @instance
         */
        AddBentoResponse.prototype.uri = null;

        /**
         * Creates a new AddBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {kappa.IAddBentoResponse=} [properties] Properties to set
         * @returns {kappa.AddBentoResponse} AddBentoResponse instance
         */
        AddBentoResponse.create = function create(properties) {
            return new AddBentoResponse(properties);
        };

        /**
         * Encodes the specified AddBentoResponse message. Does not implicitly {@link kappa.AddBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {kappa.IAddBentoResponse} message AddBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                $root.kappa.BentoUri.encode(message.uri, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddBentoResponse message, length delimited. Does not implicitly {@link kappa.AddBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {kappa.IAddBentoResponse} message AddBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.AddBentoResponse} AddBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.AddBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uri = $root.kappa.BentoUri.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.AddBentoResponse} AddBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddBentoResponse message.
         * @function verify
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.uri != null && message.hasOwnProperty("uri")) {
                let error = $root.kappa.BentoUri.verify(message.uri);
                if (error)
                    return "uri." + error;
            }
            return null;
        };

        /**
         * Creates an AddBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.AddBentoResponse} AddBentoResponse
         */
        AddBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.AddBentoResponse)
                return object;
            let message = new $root.kappa.AddBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.AddBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.uri != null) {
                if (typeof object.uri !== "object")
                    throw TypeError(".kappa.AddBentoResponse.uri: object expected");
                message.uri = $root.kappa.BentoUri.fromObject(object.uri);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.AddBentoResponse
         * @static
         * @param {kappa.AddBentoResponse} message AddBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.uri = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = $root.kappa.BentoUri.toObject(message.uri, options);
            return object;
        };

        /**
         * Converts this AddBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.AddBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddBentoResponse;
    })();

    kappa.UploadStatus = (function() {

        /**
         * Properties of an UploadStatus.
         * @memberof kappa
         * @interface IUploadStatus
         * @property {kappa.UploadStatus.Status|null} [status] UploadStatus status
         * @property {google.protobuf.ITimestamp|null} [updated_at] UploadStatus updated_at
         * @property {number|null} [percentage] UploadStatus percentage
         * @property {string|null} [error_message] UploadStatus error_message
         */

        /**
         * Constructs a new UploadStatus.
         * @memberof kappa
         * @classdesc Represents an UploadStatus.
         * @implements IUploadStatus
         * @constructor
         * @param {kappa.IUploadStatus=} [properties] Properties to set
         */
        function UploadStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadStatus status.
         * @member {kappa.UploadStatus.Status} status
         * @memberof kappa.UploadStatus
         * @instance
         */
        UploadStatus.prototype.status = 0;

        /**
         * UploadStatus updated_at.
         * @member {google.protobuf.ITimestamp|null|undefined} updated_at
         * @memberof kappa.UploadStatus
         * @instance
         */
        UploadStatus.prototype.updated_at = null;

        /**
         * UploadStatus percentage.
         * @member {number} percentage
         * @memberof kappa.UploadStatus
         * @instance
         */
        UploadStatus.prototype.percentage = 0;

        /**
         * UploadStatus error_message.
         * @member {string} error_message
         * @memberof kappa.UploadStatus
         * @instance
         */
        UploadStatus.prototype.error_message = "";

        /**
         * Creates a new UploadStatus instance using the specified properties.
         * @function create
         * @memberof kappa.UploadStatus
         * @static
         * @param {kappa.IUploadStatus=} [properties] Properties to set
         * @returns {kappa.UploadStatus} UploadStatus instance
         */
        UploadStatus.create = function create(properties) {
            return new UploadStatus(properties);
        };

        /**
         * Encodes the specified UploadStatus message. Does not implicitly {@link kappa.UploadStatus.verify|verify} messages.
         * @function encode
         * @memberof kappa.UploadStatus
         * @static
         * @param {kappa.IUploadStatus} message UploadStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.percentage != null && Object.hasOwnProperty.call(message, "percentage"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.percentage);
            if (message.error_message != null && Object.hasOwnProperty.call(message, "error_message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.error_message);
            return writer;
        };

        /**
         * Encodes the specified UploadStatus message, length delimited. Does not implicitly {@link kappa.UploadStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.UploadStatus
         * @static
         * @param {kappa.IUploadStatus} message UploadStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadStatus message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.UploadStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.UploadStatus} UploadStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.UploadStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.percentage = reader.int32();
                    break;
                case 4:
                    message.error_message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.UploadStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.UploadStatus} UploadStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadStatus message.
         * @function verify
         * @memberof kappa.UploadStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                if (error)
                    return "updated_at." + error;
            }
            if (message.percentage != null && message.hasOwnProperty("percentage"))
                if (!$util.isInteger(message.percentage))
                    return "percentage: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            return null;
        };

        /**
         * Creates an UploadStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.UploadStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.UploadStatus} UploadStatus
         */
        UploadStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.UploadStatus)
                return object;
            let message = new $root.kappa.UploadStatus();
            switch (object.status) {
            case "UNINITIALIZED":
            case 0:
                message.status = 0;
                break;
            case "UPLOADING":
            case 1:
                message.status = 1;
                break;
            case "DONE":
            case 2:
                message.status = 2;
                break;
            case "ERROR":
            case 3:
                message.status = 3;
                break;
            case "TIMEOUT":
            case 4:
                message.status = 4;
                break;
            }
            if (object.updated_at != null) {
                if (typeof object.updated_at !== "object")
                    throw TypeError(".kappa.UploadStatus.updated_at: object expected");
                message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
            }
            if (object.percentage != null)
                message.percentage = object.percentage | 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            return message;
        };

        /**
         * Creates a plain object from an UploadStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.UploadStatus
         * @static
         * @param {kappa.UploadStatus} message UploadStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "UNINITIALIZED" : 0;
                object.updated_at = null;
                object.percentage = 0;
                object.error_message = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.kappa.UploadStatus.Status[message.status] : message.status;
            if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
            if (message.percentage != null && message.hasOwnProperty("percentage"))
                object.percentage = message.percentage;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            return object;
        };

        /**
         * Converts this UploadStatus to JSON.
         * @function toJSON
         * @memberof kappa.UploadStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @name kappa.UploadStatus.Status
         * @enum {number}
         * @property {number} UNINITIALIZED=0 UNINITIALIZED value
         * @property {number} UPLOADING=1 UPLOADING value
         * @property {number} DONE=2 DONE value
         * @property {number} ERROR=3 ERROR value
         * @property {number} TIMEOUT=4 TIMEOUT value
         */
        UploadStatus.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNINITIALIZED"] = 0;
            values[valuesById[1] = "UPLOADING"] = 1;
            values[valuesById[2] = "DONE"] = 2;
            values[valuesById[3] = "ERROR"] = 3;
            values[valuesById[4] = "TIMEOUT"] = 4;
            return values;
        })();

        return UploadStatus;
    })();

    kappa.UpdateBentoRequest = (function() {

        /**
         * Properties of an UpdateBentoRequest.
         * @memberof kappa
         * @interface IUpdateBentoRequest
         * @property {string|null} [bento_name] UpdateBentoRequest bento_name
         * @property {string|null} [bento_version] UpdateBentoRequest bento_version
         * @property {kappa.IUploadStatus|null} [upload_status] UpdateBentoRequest upload_status
         * @property {kappa.IMyModelMetadata|null} [service_metadata] UpdateBentoRequest service_metadata
         */

        /**
         * Constructs a new UpdateBentoRequest.
         * @memberof kappa
         * @classdesc Represents an UpdateBentoRequest.
         * @implements IUpdateBentoRequest
         * @constructor
         * @param {kappa.IUpdateBentoRequest=} [properties] Properties to set
         */
        function UpdateBentoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.UpdateBentoRequest
         * @instance
         */
        UpdateBentoRequest.prototype.bento_name = "";

        /**
         * UpdateBentoRequest bento_version.
         * @member {string} bento_version
         * @memberof kappa.UpdateBentoRequest
         * @instance
         */
        UpdateBentoRequest.prototype.bento_version = "";

        /**
         * UpdateBentoRequest upload_status.
         * @member {kappa.IUploadStatus|null|undefined} upload_status
         * @memberof kappa.UpdateBentoRequest
         * @instance
         */
        UpdateBentoRequest.prototype.upload_status = null;

        /**
         * UpdateBentoRequest service_metadata.
         * @member {kappa.IMyModelMetadata|null|undefined} service_metadata
         * @memberof kappa.UpdateBentoRequest
         * @instance
         */
        UpdateBentoRequest.prototype.service_metadata = null;

        /**
         * Creates a new UpdateBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {kappa.IUpdateBentoRequest=} [properties] Properties to set
         * @returns {kappa.UpdateBentoRequest} UpdateBentoRequest instance
         */
        UpdateBentoRequest.create = function create(properties) {
            return new UpdateBentoRequest(properties);
        };

        /**
         * Encodes the specified UpdateBentoRequest message. Does not implicitly {@link kappa.UpdateBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {kappa.IUpdateBentoRequest} message UpdateBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            if (message.upload_status != null && Object.hasOwnProperty.call(message, "upload_status"))
                $root.kappa.UploadStatus.encode(message.upload_status, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.service_metadata != null && Object.hasOwnProperty.call(message, "service_metadata"))
                $root.kappa.MyModelMetadata.encode(message.service_metadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateBentoRequest message, length delimited. Does not implicitly {@link kappa.UpdateBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {kappa.IUpdateBentoRequest} message UpdateBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.UpdateBentoRequest} UpdateBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.UpdateBentoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                case 3:
                    message.upload_status = $root.kappa.UploadStatus.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.service_metadata = $root.kappa.MyModelMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.UpdateBentoRequest} UpdateBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateBentoRequest message.
         * @function verify
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            if (message.upload_status != null && message.hasOwnProperty("upload_status")) {
                let error = $root.kappa.UploadStatus.verify(message.upload_status);
                if (error)
                    return "upload_status." + error;
            }
            if (message.service_metadata != null && message.hasOwnProperty("service_metadata")) {
                let error = $root.kappa.MyModelMetadata.verify(message.service_metadata);
                if (error)
                    return "service_metadata." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.UpdateBentoRequest} UpdateBentoRequest
         */
        UpdateBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.UpdateBentoRequest)
                return object;
            let message = new $root.kappa.UpdateBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            if (object.upload_status != null) {
                if (typeof object.upload_status !== "object")
                    throw TypeError(".kappa.UpdateBentoRequest.upload_status: object expected");
                message.upload_status = $root.kappa.UploadStatus.fromObject(object.upload_status);
            }
            if (object.service_metadata != null) {
                if (typeof object.service_metadata !== "object")
                    throw TypeError(".kappa.UpdateBentoRequest.service_metadata: object expected");
                message.service_metadata = $root.kappa.MyModelMetadata.fromObject(object.service_metadata);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.UpdateBentoRequest
         * @static
         * @param {kappa.UpdateBentoRequest} message UpdateBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
                object.upload_status = null;
                object.service_metadata = null;
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            if (message.upload_status != null && message.hasOwnProperty("upload_status"))
                object.upload_status = $root.kappa.UploadStatus.toObject(message.upload_status, options);
            if (message.service_metadata != null && message.hasOwnProperty("service_metadata"))
                object.service_metadata = $root.kappa.MyModelMetadata.toObject(message.service_metadata, options);
            return object;
        };

        /**
         * Converts this UpdateBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.UpdateBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateBentoRequest;
    })();

    kappa.UpdateBentoResponse = (function() {

        /**
         * Properties of an UpdateBentoResponse.
         * @memberof kappa
         * @interface IUpdateBentoResponse
         * @property {kappa.IStatus|null} [status] UpdateBentoResponse status
         */

        /**
         * Constructs a new UpdateBentoResponse.
         * @memberof kappa
         * @classdesc Represents an UpdateBentoResponse.
         * @implements IUpdateBentoResponse
         * @constructor
         * @param {kappa.IUpdateBentoResponse=} [properties] Properties to set
         */
        function UpdateBentoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.UpdateBentoResponse
         * @instance
         */
        UpdateBentoResponse.prototype.status = null;

        /**
         * Creates a new UpdateBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {kappa.IUpdateBentoResponse=} [properties] Properties to set
         * @returns {kappa.UpdateBentoResponse} UpdateBentoResponse instance
         */
        UpdateBentoResponse.create = function create(properties) {
            return new UpdateBentoResponse(properties);
        };

        /**
         * Encodes the specified UpdateBentoResponse message. Does not implicitly {@link kappa.UpdateBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {kappa.IUpdateBentoResponse} message UpdateBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateBentoResponse message, length delimited. Does not implicitly {@link kappa.UpdateBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {kappa.IUpdateBentoResponse} message UpdateBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.UpdateBentoResponse} UpdateBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.UpdateBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.UpdateBentoResponse} UpdateBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateBentoResponse message.
         * @function verify
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.UpdateBentoResponse} UpdateBentoResponse
         */
        UpdateBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.UpdateBentoResponse)
                return object;
            let message = new $root.kappa.UpdateBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.UpdateBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.UpdateBentoResponse
         * @static
         * @param {kappa.UpdateBentoResponse} message UpdateBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this UpdateBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.UpdateBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateBentoResponse;
    })();

    kappa.DangerouslyDeleteBentoRequest = (function() {

        /**
         * Properties of a DangerouslyDeleteBentoRequest.
         * @memberof kappa
         * @interface IDangerouslyDeleteBentoRequest
         * @property {string|null} [bento_name] DangerouslyDeleteBentoRequest bento_name
         * @property {string|null} [bento_version] DangerouslyDeleteBentoRequest bento_version
         */

        /**
         * Constructs a new DangerouslyDeleteBentoRequest.
         * @memberof kappa
         * @classdesc Represents a DangerouslyDeleteBentoRequest.
         * @implements IDangerouslyDeleteBentoRequest
         * @constructor
         * @param {kappa.IDangerouslyDeleteBentoRequest=} [properties] Properties to set
         */
        function DangerouslyDeleteBentoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DangerouslyDeleteBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @instance
         */
        DangerouslyDeleteBentoRequest.prototype.bento_name = "";

        /**
         * DangerouslyDeleteBentoRequest bento_version.
         * @member {string} bento_version
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @instance
         */
        DangerouslyDeleteBentoRequest.prototype.bento_version = "";

        /**
         * Creates a new DangerouslyDeleteBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {kappa.IDangerouslyDeleteBentoRequest=} [properties] Properties to set
         * @returns {kappa.DangerouslyDeleteBentoRequest} DangerouslyDeleteBentoRequest instance
         */
        DangerouslyDeleteBentoRequest.create = function create(properties) {
            return new DangerouslyDeleteBentoRequest(properties);
        };

        /**
         * Encodes the specified DangerouslyDeleteBentoRequest message. Does not implicitly {@link kappa.DangerouslyDeleteBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {kappa.IDangerouslyDeleteBentoRequest} message DangerouslyDeleteBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DangerouslyDeleteBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            return writer;
        };

        /**
         * Encodes the specified DangerouslyDeleteBentoRequest message, length delimited. Does not implicitly {@link kappa.DangerouslyDeleteBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {kappa.IDangerouslyDeleteBentoRequest} message DangerouslyDeleteBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DangerouslyDeleteBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DangerouslyDeleteBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DangerouslyDeleteBentoRequest} DangerouslyDeleteBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DangerouslyDeleteBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DangerouslyDeleteBentoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DangerouslyDeleteBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DangerouslyDeleteBentoRequest} DangerouslyDeleteBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DangerouslyDeleteBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DangerouslyDeleteBentoRequest message.
         * @function verify
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DangerouslyDeleteBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            return null;
        };

        /**
         * Creates a DangerouslyDeleteBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DangerouslyDeleteBentoRequest} DangerouslyDeleteBentoRequest
         */
        DangerouslyDeleteBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DangerouslyDeleteBentoRequest)
                return object;
            let message = new $root.kappa.DangerouslyDeleteBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            return message;
        };

        /**
         * Creates a plain object from a DangerouslyDeleteBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @static
         * @param {kappa.DangerouslyDeleteBentoRequest} message DangerouslyDeleteBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DangerouslyDeleteBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            return object;
        };

        /**
         * Converts this DangerouslyDeleteBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.DangerouslyDeleteBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DangerouslyDeleteBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DangerouslyDeleteBentoRequest;
    })();

    kappa.DangerouslyDeleteBentoResponse = (function() {

        /**
         * Properties of a DangerouslyDeleteBentoResponse.
         * @memberof kappa
         * @interface IDangerouslyDeleteBentoResponse
         * @property {kappa.IStatus|null} [status] DangerouslyDeleteBentoResponse status
         */

        /**
         * Constructs a new DangerouslyDeleteBentoResponse.
         * @memberof kappa
         * @classdesc Represents a DangerouslyDeleteBentoResponse.
         * @implements IDangerouslyDeleteBentoResponse
         * @constructor
         * @param {kappa.IDangerouslyDeleteBentoResponse=} [properties] Properties to set
         */
        function DangerouslyDeleteBentoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DangerouslyDeleteBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @instance
         */
        DangerouslyDeleteBentoResponse.prototype.status = null;

        /**
         * Creates a new DangerouslyDeleteBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {kappa.IDangerouslyDeleteBentoResponse=} [properties] Properties to set
         * @returns {kappa.DangerouslyDeleteBentoResponse} DangerouslyDeleteBentoResponse instance
         */
        DangerouslyDeleteBentoResponse.create = function create(properties) {
            return new DangerouslyDeleteBentoResponse(properties);
        };

        /**
         * Encodes the specified DangerouslyDeleteBentoResponse message. Does not implicitly {@link kappa.DangerouslyDeleteBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {kappa.IDangerouslyDeleteBentoResponse} message DangerouslyDeleteBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DangerouslyDeleteBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DangerouslyDeleteBentoResponse message, length delimited. Does not implicitly {@link kappa.DangerouslyDeleteBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {kappa.IDangerouslyDeleteBentoResponse} message DangerouslyDeleteBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DangerouslyDeleteBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DangerouslyDeleteBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.DangerouslyDeleteBentoResponse} DangerouslyDeleteBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DangerouslyDeleteBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.DangerouslyDeleteBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DangerouslyDeleteBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.DangerouslyDeleteBentoResponse} DangerouslyDeleteBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DangerouslyDeleteBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DangerouslyDeleteBentoResponse message.
         * @function verify
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DangerouslyDeleteBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            return null;
        };

        /**
         * Creates a DangerouslyDeleteBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.DangerouslyDeleteBentoResponse} DangerouslyDeleteBentoResponse
         */
        DangerouslyDeleteBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.DangerouslyDeleteBentoResponse)
                return object;
            let message = new $root.kappa.DangerouslyDeleteBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.DangerouslyDeleteBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            return message;
        };

        /**
         * Creates a plain object from a DangerouslyDeleteBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @static
         * @param {kappa.DangerouslyDeleteBentoResponse} message DangerouslyDeleteBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DangerouslyDeleteBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            return object;
        };

        /**
         * Converts this DangerouslyDeleteBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.DangerouslyDeleteBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DangerouslyDeleteBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DangerouslyDeleteBentoResponse;
    })();

    kappa.GetBentoRequest = (function() {

        /**
         * Properties of a GetBentoRequest.
         * @memberof kappa
         * @interface IGetBentoRequest
         * @property {string|null} [bento_name] GetBentoRequest bento_name
         * @property {string|null} [bento_version] GetBentoRequest bento_version
         */

        /**
         * Constructs a new GetBentoRequest.
         * @memberof kappa
         * @classdesc Represents a GetBentoRequest.
         * @implements IGetBentoRequest
         * @constructor
         * @param {kappa.IGetBentoRequest=} [properties] Properties to set
         */
        function GetBentoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.GetBentoRequest
         * @instance
         */
        GetBentoRequest.prototype.bento_name = "";

        /**
         * GetBentoRequest bento_version.
         * @member {string} bento_version
         * @memberof kappa.GetBentoRequest
         * @instance
         */
        GetBentoRequest.prototype.bento_version = "";

        /**
         * Creates a new GetBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {kappa.IGetBentoRequest=} [properties] Properties to set
         * @returns {kappa.GetBentoRequest} GetBentoRequest instance
         */
        GetBentoRequest.create = function create(properties) {
            return new GetBentoRequest(properties);
        };

        /**
         * Encodes the specified GetBentoRequest message. Does not implicitly {@link kappa.GetBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {kappa.IGetBentoRequest} message GetBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            return writer;
        };

        /**
         * Encodes the specified GetBentoRequest message, length delimited. Does not implicitly {@link kappa.GetBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {kappa.IGetBentoRequest} message GetBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.GetBentoRequest} GetBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.GetBentoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.GetBentoRequest} GetBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBentoRequest message.
         * @function verify
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            return null;
        };

        /**
         * Creates a GetBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.GetBentoRequest} GetBentoRequest
         */
        GetBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.GetBentoRequest)
                return object;
            let message = new $root.kappa.GetBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            return message;
        };

        /**
         * Creates a plain object from a GetBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.GetBentoRequest
         * @static
         * @param {kappa.GetBentoRequest} message GetBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            return object;
        };

        /**
         * Converts this GetBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.GetBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetBentoRequest;
    })();

    kappa.GetBentoResponse = (function() {

        /**
         * Properties of a GetBentoResponse.
         * @memberof kappa
         * @interface IGetBentoResponse
         * @property {kappa.IStatus|null} [status] GetBentoResponse status
         * @property {kappa.IBento|null} [bento] GetBentoResponse bento
         */

        /**
         * Constructs a new GetBentoResponse.
         * @memberof kappa
         * @classdesc Represents a GetBentoResponse.
         * @implements IGetBentoResponse
         * @constructor
         * @param {kappa.IGetBentoResponse=} [properties] Properties to set
         */
        function GetBentoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.GetBentoResponse
         * @instance
         */
        GetBentoResponse.prototype.status = null;

        /**
         * GetBentoResponse bento.
         * @member {kappa.IBento|null|undefined} bento
         * @memberof kappa.GetBentoResponse
         * @instance
         */
        GetBentoResponse.prototype.bento = null;

        /**
         * Creates a new GetBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {kappa.IGetBentoResponse=} [properties] Properties to set
         * @returns {kappa.GetBentoResponse} GetBentoResponse instance
         */
        GetBentoResponse.create = function create(properties) {
            return new GetBentoResponse(properties);
        };

        /**
         * Encodes the specified GetBentoResponse message. Does not implicitly {@link kappa.GetBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {kappa.IGetBentoResponse} message GetBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bento != null && Object.hasOwnProperty.call(message, "bento"))
                $root.kappa.Bento.encode(message.bento, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetBentoResponse message, length delimited. Does not implicitly {@link kappa.GetBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {kappa.IGetBentoResponse} message GetBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.GetBentoResponse} GetBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.GetBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bento = $root.kappa.Bento.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.GetBentoResponse} GetBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBentoResponse message.
         * @function verify
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.bento != null && message.hasOwnProperty("bento")) {
                let error = $root.kappa.Bento.verify(message.bento);
                if (error)
                    return "bento." + error;
            }
            return null;
        };

        /**
         * Creates a GetBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.GetBentoResponse} GetBentoResponse
         */
        GetBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.GetBentoResponse)
                return object;
            let message = new $root.kappa.GetBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.GetBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.bento != null) {
                if (typeof object.bento !== "object")
                    throw TypeError(".kappa.GetBentoResponse.bento: object expected");
                message.bento = $root.kappa.Bento.fromObject(object.bento);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.GetBentoResponse
         * @static
         * @param {kappa.GetBentoResponse} message GetBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.bento = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.bento != null && message.hasOwnProperty("bento"))
                object.bento = $root.kappa.Bento.toObject(message.bento, options);
            return object;
        };

        /**
         * Converts this GetBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.GetBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetBentoResponse;
    })();

    kappa.ListBentoRequest = (function() {

        /**
         * Properties of a ListBentoRequest.
         * @memberof kappa
         * @interface IListBentoRequest
         * @property {string|null} [bento_name] ListBentoRequest bento_name
         * @property {number|null} [offset] ListBentoRequest offset
         * @property {number|null} [limit] ListBentoRequest limit
         * @property {kappa.ListBentoRequest.SORTABLE_COLUMN|null} [order_by] ListBentoRequest order_by
         * @property {boolean|null} [ascending_order] ListBentoRequest ascending_order
         * @property {kappa.ILabelSelectors|null} [label_selectors] ListBentoRequest label_selectors
         */

        /**
         * Constructs a new ListBentoRequest.
         * @memberof kappa
         * @classdesc Represents a ListBentoRequest.
         * @implements IListBentoRequest
         * @constructor
         * @param {kappa.IListBentoRequest=} [properties] Properties to set
         */
        function ListBentoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.bento_name = "";

        /**
         * ListBentoRequest offset.
         * @member {number} offset
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.offset = 0;

        /**
         * ListBentoRequest limit.
         * @member {number} limit
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.limit = 0;

        /**
         * ListBentoRequest order_by.
         * @member {kappa.ListBentoRequest.SORTABLE_COLUMN} order_by
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.order_by = 0;

        /**
         * ListBentoRequest ascending_order.
         * @member {boolean} ascending_order
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.ascending_order = false;

        /**
         * ListBentoRequest label_selectors.
         * @member {kappa.ILabelSelectors|null|undefined} label_selectors
         * @memberof kappa.ListBentoRequest
         * @instance
         */
        ListBentoRequest.prototype.label_selectors = null;

        /**
         * Creates a new ListBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {kappa.IListBentoRequest=} [properties] Properties to set
         * @returns {kappa.ListBentoRequest} ListBentoRequest instance
         */
        ListBentoRequest.create = function create(properties) {
            return new ListBentoRequest(properties);
        };

        /**
         * Encodes the specified ListBentoRequest message. Does not implicitly {@link kappa.ListBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {kappa.IListBentoRequest} message ListBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limit);
            if (message.order_by != null && Object.hasOwnProperty.call(message, "order_by"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.order_by);
            if (message.ascending_order != null && Object.hasOwnProperty.call(message, "ascending_order"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.ascending_order);
            if (message.label_selectors != null && Object.hasOwnProperty.call(message, "label_selectors"))
                $root.kappa.LabelSelectors.encode(message.label_selectors, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListBentoRequest message, length delimited. Does not implicitly {@link kappa.ListBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {kappa.IListBentoRequest} message ListBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ListBentoRequest} ListBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ListBentoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                case 3:
                    message.limit = reader.int32();
                    break;
                case 4:
                    message.order_by = reader.int32();
                    break;
                case 5:
                    message.ascending_order = reader.bool();
                    break;
                case 6:
                    message.label_selectors = $root.kappa.LabelSelectors.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ListBentoRequest} ListBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBentoRequest message.
         * @function verify
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.order_by != null && message.hasOwnProperty("order_by"))
                switch (message.order_by) {
                default:
                    return "order_by: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.ascending_order != null && message.hasOwnProperty("ascending_order"))
                if (typeof message.ascending_order !== "boolean")
                    return "ascending_order: boolean expected";
            if (message.label_selectors != null && message.hasOwnProperty("label_selectors")) {
                let error = $root.kappa.LabelSelectors.verify(message.label_selectors);
                if (error)
                    return "label_selectors." + error;
            }
            return null;
        };

        /**
         * Creates a ListBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ListBentoRequest} ListBentoRequest
         */
        ListBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ListBentoRequest)
                return object;
            let message = new $root.kappa.ListBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            switch (object.order_by) {
            case "created_at":
            case 0:
                message.order_by = 0;
                break;
            case "name":
            case 1:
                message.order_by = 1;
                break;
            }
            if (object.ascending_order != null)
                message.ascending_order = Boolean(object.ascending_order);
            if (object.label_selectors != null) {
                if (typeof object.label_selectors !== "object")
                    throw TypeError(".kappa.ListBentoRequest.label_selectors: object expected");
                message.label_selectors = $root.kappa.LabelSelectors.fromObject(object.label_selectors);
            }
            return message;
        };

        /**
         * Creates a plain object from a ListBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ListBentoRequest
         * @static
         * @param {kappa.ListBentoRequest} message ListBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bento_name = "";
                object.offset = 0;
                object.limit = 0;
                object.order_by = options.enums === String ? "created_at" : 0;
                object.ascending_order = false;
                object.label_selectors = null;
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.order_by != null && message.hasOwnProperty("order_by"))
                object.order_by = options.enums === String ? $root.kappa.ListBentoRequest.SORTABLE_COLUMN[message.order_by] : message.order_by;
            if (message.ascending_order != null && message.hasOwnProperty("ascending_order"))
                object.ascending_order = message.ascending_order;
            if (message.label_selectors != null && message.hasOwnProperty("label_selectors"))
                object.label_selectors = $root.kappa.LabelSelectors.toObject(message.label_selectors, options);
            return object;
        };

        /**
         * Converts this ListBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.ListBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SORTABLE_COLUMN enum.
         * @name kappa.ListBentoRequest.SORTABLE_COLUMN
         * @enum {number}
         * @property {number} created_at=0 created_at value
         * @property {number} name=1 name value
         */
        ListBentoRequest.SORTABLE_COLUMN = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "created_at"] = 0;
            values[valuesById[1] = "name"] = 1;
            return values;
        })();

        return ListBentoRequest;
    })();

    kappa.ListBentoResponse = (function() {

        /**
         * Properties of a ListBentoResponse.
         * @memberof kappa
         * @interface IListBentoResponse
         * @property {kappa.IStatus|null} [status] ListBentoResponse status
         * @property {Array.<kappa.IBento>|null} [bentos] ListBentoResponse bentos
         */

        /**
         * Constructs a new ListBentoResponse.
         * @memberof kappa
         * @classdesc Represents a ListBentoResponse.
         * @implements IListBentoResponse
         * @constructor
         * @param {kappa.IListBentoResponse=} [properties] Properties to set
         */
        function ListBentoResponse(properties) {
            this.bentos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.ListBentoResponse
         * @instance
         */
        ListBentoResponse.prototype.status = null;

        /**
         * ListBentoResponse bentos.
         * @member {Array.<kappa.IBento>} bentos
         * @memberof kappa.ListBentoResponse
         * @instance
         */
        ListBentoResponse.prototype.bentos = $util.emptyArray;

        /**
         * Creates a new ListBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {kappa.IListBentoResponse=} [properties] Properties to set
         * @returns {kappa.ListBentoResponse} ListBentoResponse instance
         */
        ListBentoResponse.create = function create(properties) {
            return new ListBentoResponse(properties);
        };

        /**
         * Encodes the specified ListBentoResponse message. Does not implicitly {@link kappa.ListBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {kappa.IListBentoResponse} message ListBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bentos != null && message.bentos.length)
                for (let i = 0; i < message.bentos.length; ++i)
                    $root.kappa.Bento.encode(message.bentos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListBentoResponse message, length delimited. Does not implicitly {@link kappa.ListBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {kappa.IListBentoResponse} message ListBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ListBentoResponse} ListBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ListBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.bentos && message.bentos.length))
                        message.bentos = [];
                    message.bentos.push($root.kappa.Bento.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ListBentoResponse} ListBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBentoResponse message.
         * @function verify
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.bentos != null && message.hasOwnProperty("bentos")) {
                if (!Array.isArray(message.bentos))
                    return "bentos: array expected";
                for (let i = 0; i < message.bentos.length; ++i) {
                    let error = $root.kappa.Bento.verify(message.bentos[i]);
                    if (error)
                        return "bentos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ListBentoResponse} ListBentoResponse
         */
        ListBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ListBentoResponse)
                return object;
            let message = new $root.kappa.ListBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.ListBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.bentos) {
                if (!Array.isArray(object.bentos))
                    throw TypeError(".kappa.ListBentoResponse.bentos: array expected");
                message.bentos = [];
                for (let i = 0; i < object.bentos.length; ++i) {
                    if (typeof object.bentos[i] !== "object")
                        throw TypeError(".kappa.ListBentoResponse.bentos: object expected");
                    message.bentos[i] = $root.kappa.Bento.fromObject(object.bentos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ListBentoResponse
         * @static
         * @param {kappa.ListBentoResponse} message ListBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.bentos = [];
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.bentos && message.bentos.length) {
                object.bentos = [];
                for (let j = 0; j < message.bentos.length; ++j)
                    object.bentos[j] = $root.kappa.Bento.toObject(message.bentos[j], options);
            }
            return object;
        };

        /**
         * Converts this ListBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.ListBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListBentoResponse;
    })();

    kappa.ListProjectResponse = (function() {

        /**
         * Properties of a ListProjectResponse.
         * @memberof kappa
         * @interface IListProjectResponse
         * @property {kappa.IStatus|null} [status] ListProjectResponse status
         * @property {Array.<kappa.IProject>|null} [projects] ListProjectResponse projects
         */

        /**
         * Constructs a new ListProjectResponse.
         * @memberof kappa
         * @classdesc Represents a ListProjectResponse.
         * @implements IListProjectResponse
         * @constructor
         * @param {kappa.IListProjectResponse=} [properties] Properties to set
         */
        function ListProjectResponse(properties) {
            this.projects = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListProjectResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.ListProjectResponse
         * @instance
         */
        ListProjectResponse.prototype.status = null;

        /**
         * ListProjectResponse projects.
         * @member {Array.<kappa.IProject>} projects
         * @memberof kappa.ListProjectResponse
         * @instance
         */
        ListProjectResponse.prototype.projects = $util.emptyArray;

        /**
         * Creates a new ListProjectResponse instance using the specified properties.
         * @function create
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {kappa.IListProjectResponse=} [properties] Properties to set
         * @returns {kappa.ListProjectResponse} ListProjectResponse instance
         */
        ListProjectResponse.create = function create(properties) {
            return new ListProjectResponse(properties);
        };

        /**
         * Encodes the specified ListProjectResponse message. Does not implicitly {@link kappa.ListProjectResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {kappa.IListProjectResponse} message ListProjectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListProjectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.projects != null && message.projects.length)
                for (let i = 0; i < message.projects.length; ++i)
                    $root.kappa.Project.encode(message.projects[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListProjectResponse message, length delimited. Does not implicitly {@link kappa.ListProjectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {kappa.IListProjectResponse} message ListProjectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListProjectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListProjectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ListProjectResponse} ListProjectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListProjectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ListProjectResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.projects && message.projects.length))
                        message.projects = [];
                    message.projects.push($root.kappa.Project.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListProjectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ListProjectResponse} ListProjectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListProjectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListProjectResponse message.
         * @function verify
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListProjectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.projects != null && message.hasOwnProperty("projects")) {
                if (!Array.isArray(message.projects))
                    return "projects: array expected";
                for (let i = 0; i < message.projects.length; ++i) {
                    let error = $root.kappa.Project.verify(message.projects[i]);
                    if (error)
                        return "projects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListProjectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ListProjectResponse} ListProjectResponse
         */
        ListProjectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ListProjectResponse)
                return object;
            let message = new $root.kappa.ListProjectResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.ListProjectResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.projects) {
                if (!Array.isArray(object.projects))
                    throw TypeError(".kappa.ListProjectResponse.projects: array expected");
                message.projects = [];
                for (let i = 0; i < object.projects.length; ++i) {
                    if (typeof object.projects[i] !== "object")
                        throw TypeError(".kappa.ListProjectResponse.projects: object expected");
                    message.projects[i] = $root.kappa.Project.fromObject(object.projects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListProjectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ListProjectResponse
         * @static
         * @param {kappa.ListProjectResponse} message ListProjectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListProjectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.projects = [];
            if (options.defaults)
                object.status = null;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.projects && message.projects.length) {
                object.projects = [];
                for (let j = 0; j < message.projects.length; ++j)
                    object.projects[j] = $root.kappa.Project.toObject(message.projects[j], options);
            }
            return object;
        };

        /**
         * Converts this ListProjectResponse to JSON.
         * @function toJSON
         * @memberof kappa.ListProjectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListProjectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListProjectResponse;
    })();

    kappa.ContainerizeBentoRequest = (function() {

        /**
         * Properties of a ContainerizeBentoRequest.
         * @memberof kappa
         * @interface IContainerizeBentoRequest
         * @property {string|null} [bento_name] ContainerizeBentoRequest bento_name
         * @property {string|null} [bento_version] ContainerizeBentoRequest bento_version
         * @property {string|null} [tag] ContainerizeBentoRequest tag
         * @property {Object.<string,string>|null} [build_args] ContainerizeBentoRequest build_args
         * @property {boolean|null} [push] ContainerizeBentoRequest push
         * @property {string|null} [repository] ContainerizeBentoRequest repository
         */

        /**
         * Constructs a new ContainerizeBentoRequest.
         * @memberof kappa
         * @classdesc Represents a ContainerizeBentoRequest.
         * @implements IContainerizeBentoRequest
         * @constructor
         * @param {kappa.IContainerizeBentoRequest=} [properties] Properties to set
         */
        function ContainerizeBentoRequest(properties) {
            this.build_args = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContainerizeBentoRequest bento_name.
         * @member {string} bento_name
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.bento_name = "";

        /**
         * ContainerizeBentoRequest bento_version.
         * @member {string} bento_version
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.bento_version = "";

        /**
         * ContainerizeBentoRequest tag.
         * @member {string} tag
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.tag = "";

        /**
         * ContainerizeBentoRequest build_args.
         * @member {Object.<string,string>} build_args
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.build_args = $util.emptyObject;

        /**
         * ContainerizeBentoRequest push.
         * @member {boolean} push
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.push = false;

        /**
         * ContainerizeBentoRequest repository.
         * @member {string} repository
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         */
        ContainerizeBentoRequest.prototype.repository = "";

        /**
         * Creates a new ContainerizeBentoRequest instance using the specified properties.
         * @function create
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {kappa.IContainerizeBentoRequest=} [properties] Properties to set
         * @returns {kappa.ContainerizeBentoRequest} ContainerizeBentoRequest instance
         */
        ContainerizeBentoRequest.create = function create(properties) {
            return new ContainerizeBentoRequest(properties);
        };

        /**
         * Encodes the specified ContainerizeBentoRequest message. Does not implicitly {@link kappa.ContainerizeBentoRequest.verify|verify} messages.
         * @function encode
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {kappa.IContainerizeBentoRequest} message ContainerizeBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContainerizeBentoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bento_name != null && Object.hasOwnProperty.call(message, "bento_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bento_name);
            if (message.bento_version != null && Object.hasOwnProperty.call(message, "bento_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bento_version);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tag);
            if (message.build_args != null && Object.hasOwnProperty.call(message, "build_args"))
                for (let keys = Object.keys(message.build_args), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.build_args[keys[i]]).ldelim();
            if (message.push != null && Object.hasOwnProperty.call(message, "push"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.push);
            if (message.repository != null && Object.hasOwnProperty.call(message, "repository"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.repository);
            return writer;
        };

        /**
         * Encodes the specified ContainerizeBentoRequest message, length delimited. Does not implicitly {@link kappa.ContainerizeBentoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {kappa.IContainerizeBentoRequest} message ContainerizeBentoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContainerizeBentoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContainerizeBentoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ContainerizeBentoRequest} ContainerizeBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContainerizeBentoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ContainerizeBentoRequest(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bento_name = reader.string();
                    break;
                case 2:
                    message.bento_version = reader.string();
                    break;
                case 3:
                    message.tag = reader.string();
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.build_args === $util.emptyObject)
                        message.build_args = {};
                    key = reader.string();
                    reader.pos++;
                    message.build_args[key] = reader.string();
                    break;
                case 5:
                    message.push = reader.bool();
                    break;
                case 6:
                    message.repository = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContainerizeBentoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ContainerizeBentoRequest} ContainerizeBentoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContainerizeBentoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContainerizeBentoRequest message.
         * @function verify
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContainerizeBentoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                if (!$util.isString(message.bento_name))
                    return "bento_name: string expected";
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                if (!$util.isString(message.bento_version))
                    return "bento_version: string expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.build_args != null && message.hasOwnProperty("build_args")) {
                if (!$util.isObject(message.build_args))
                    return "build_args: object expected";
                let key = Object.keys(message.build_args);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.build_args[key[i]]))
                        return "build_args: string{k:string} expected";
            }
            if (message.push != null && message.hasOwnProperty("push"))
                if (typeof message.push !== "boolean")
                    return "push: boolean expected";
            if (message.repository != null && message.hasOwnProperty("repository"))
                if (!$util.isString(message.repository))
                    return "repository: string expected";
            return null;
        };

        /**
         * Creates a ContainerizeBentoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ContainerizeBentoRequest} ContainerizeBentoRequest
         */
        ContainerizeBentoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ContainerizeBentoRequest)
                return object;
            let message = new $root.kappa.ContainerizeBentoRequest();
            if (object.bento_name != null)
                message.bento_name = String(object.bento_name);
            if (object.bento_version != null)
                message.bento_version = String(object.bento_version);
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.build_args) {
                if (typeof object.build_args !== "object")
                    throw TypeError(".kappa.ContainerizeBentoRequest.build_args: object expected");
                message.build_args = {};
                for (let keys = Object.keys(object.build_args), i = 0; i < keys.length; ++i)
                    message.build_args[keys[i]] = String(object.build_args[keys[i]]);
            }
            if (object.push != null)
                message.push = Boolean(object.push);
            if (object.repository != null)
                message.repository = String(object.repository);
            return message;
        };

        /**
         * Creates a plain object from a ContainerizeBentoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ContainerizeBentoRequest
         * @static
         * @param {kappa.ContainerizeBentoRequest} message ContainerizeBentoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContainerizeBentoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.build_args = {};
            if (options.defaults) {
                object.bento_name = "";
                object.bento_version = "";
                object.tag = "";
                object.push = false;
                object.repository = "";
            }
            if (message.bento_name != null && message.hasOwnProperty("bento_name"))
                object.bento_name = message.bento_name;
            if (message.bento_version != null && message.hasOwnProperty("bento_version"))
                object.bento_version = message.bento_version;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            let keys2;
            if (message.build_args && (keys2 = Object.keys(message.build_args)).length) {
                object.build_args = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.build_args[keys2[j]] = message.build_args[keys2[j]];
            }
            if (message.push != null && message.hasOwnProperty("push"))
                object.push = message.push;
            if (message.repository != null && message.hasOwnProperty("repository"))
                object.repository = message.repository;
            return object;
        };

        /**
         * Converts this ContainerizeBentoRequest to JSON.
         * @function toJSON
         * @memberof kappa.ContainerizeBentoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContainerizeBentoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContainerizeBentoRequest;
    })();

    kappa.ContainerizeBentoResponse = (function() {

        /**
         * Properties of a ContainerizeBentoResponse.
         * @memberof kappa
         * @interface IContainerizeBentoResponse
         * @property {kappa.IStatus|null} [status] ContainerizeBentoResponse status
         * @property {string|null} [tag] ContainerizeBentoResponse tag
         */

        /**
         * Constructs a new ContainerizeBentoResponse.
         * @memberof kappa
         * @classdesc Represents a ContainerizeBentoResponse.
         * @implements IContainerizeBentoResponse
         * @constructor
         * @param {kappa.IContainerizeBentoResponse=} [properties] Properties to set
         */
        function ContainerizeBentoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContainerizeBentoResponse status.
         * @member {kappa.IStatus|null|undefined} status
         * @memberof kappa.ContainerizeBentoResponse
         * @instance
         */
        ContainerizeBentoResponse.prototype.status = null;

        /**
         * ContainerizeBentoResponse tag.
         * @member {string} tag
         * @memberof kappa.ContainerizeBentoResponse
         * @instance
         */
        ContainerizeBentoResponse.prototype.tag = "";

        /**
         * Creates a new ContainerizeBentoResponse instance using the specified properties.
         * @function create
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {kappa.IContainerizeBentoResponse=} [properties] Properties to set
         * @returns {kappa.ContainerizeBentoResponse} ContainerizeBentoResponse instance
         */
        ContainerizeBentoResponse.create = function create(properties) {
            return new ContainerizeBentoResponse(properties);
        };

        /**
         * Encodes the specified ContainerizeBentoResponse message. Does not implicitly {@link kappa.ContainerizeBentoResponse.verify|verify} messages.
         * @function encode
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {kappa.IContainerizeBentoResponse} message ContainerizeBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContainerizeBentoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                $root.kappa.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tag);
            return writer;
        };

        /**
         * Encodes the specified ContainerizeBentoResponse message, length delimited. Does not implicitly {@link kappa.ContainerizeBentoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {kappa.IContainerizeBentoResponse} message ContainerizeBentoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContainerizeBentoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContainerizeBentoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {kappa.ContainerizeBentoResponse} ContainerizeBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContainerizeBentoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.kappa.ContainerizeBentoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = $root.kappa.Status.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContainerizeBentoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {kappa.ContainerizeBentoResponse} ContainerizeBentoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContainerizeBentoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContainerizeBentoResponse message.
         * @function verify
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContainerizeBentoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                let error = $root.kappa.Status.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            return null;
        };

        /**
         * Creates a ContainerizeBentoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {kappa.ContainerizeBentoResponse} ContainerizeBentoResponse
         */
        ContainerizeBentoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.kappa.ContainerizeBentoResponse)
                return object;
            let message = new $root.kappa.ContainerizeBentoResponse();
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".kappa.ContainerizeBentoResponse.status: object expected");
                message.status = $root.kappa.Status.fromObject(object.status);
            }
            if (object.tag != null)
                message.tag = String(object.tag);
            return message;
        };

        /**
         * Creates a plain object from a ContainerizeBentoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof kappa.ContainerizeBentoResponse
         * @static
         * @param {kappa.ContainerizeBentoResponse} message ContainerizeBentoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContainerizeBentoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = null;
                object.tag = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.kappa.Status.toObject(message.status, options);
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            return object;
        };

        /**
         * Converts this ContainerizeBentoResponse to JSON.
         * @function toJSON
         * @memberof kappa.ContainerizeBentoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContainerizeBentoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContainerizeBentoResponse;
    })();

    return kappa;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (let keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        key = reader.string();
                        reader.pos++;
                        message.fields[key] = $root.google.protobuf.Value.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    let key = Object.keys(message.fields);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                let message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (let keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                let keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        let error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                let message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (let i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (let i = 0; i < message.values.length; ++i) {
                        let error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                let message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (let i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (let j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListValue;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
