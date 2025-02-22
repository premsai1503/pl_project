import Blockly from "blockly";

Blockly.Blocks["variable_set"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("define ")
            .appendField(new Blockly.FieldTextInput(""), "variableName")
            .appendField(" as ");
        this.appendValueInput("variableValue")
            .setCheck(null);
        this.setInputsInline(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setColour("#cc7a00");
    }
};

Blockly.JavaScript["variable_set"] = function (block) {
    let variableName = block.getFieldValue("variableName");
    let variableValue = Blockly.JavaScript.valueToCode(
        block,
        "variableValue",
        Blockly.JavaScript.ORDER_ATOMIC
    )
    let code = `let USER_VAR_${variableName} = ${variableValue};\n`;
    return code;
};

Blockly.Blocks["variable_modify"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("modify ")
            .appendField(new Blockly.FieldTextInput(""), "variableName")
            .appendField(" to ");
        this.appendValueInput("variableValue")
            .setCheck(null);
        this.setColour("#cc7a00");        
        this.setInputsInline(true);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript["variable_modify"] = function (block) {
    let variableName = block.getFieldValue("variableName");
    let variableValue = Blockly.JavaScript.valueToCode(
        block,
        "variableValue",
        Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `USER_VAR_${variableName} = ${variableValue};\n`;
    return code;
};

Blockly.Blocks["variable_get"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "value");
        this.setOutput(true, 'Variable');
        this.setColour("#cc7a00");
    }
};

Blockly.JavaScript["variable_get"] = function (block) {
    let variableName = block.getFieldValue("value");
    var code = `USER_VAR_${variableName}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};