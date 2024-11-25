// Function to replace repeaters in field definition
function replaceRepeaterInFieldDef(def, repeater) {
  // Assuming def is an object and we want to replace some placeholder with the repeater value
  for (let key in def) {
    if (def.hasOwnProperty(key) && typeof def[key] === 'string') {
      def[key] = def[key].replace(/REPEATER_PLACEHOLDER/g, repeater);
    }
  }
  return def;
}

// Example usage
const fieldDef = {
  name: "field_name_REPEATER_PLACEHOLDER",
  type: "string",
  label: "Label for REPEATER_PLACEHOLDER"
};

const repeaterValue = "example";

const updatedFieldDef = replaceRepeaterInFieldDef(fieldDef, repeaterValue);
console.log(updatedFieldDef);

// Expected Output:
// {
//   name: "field_name_example",
//   type: "string",
//   label: "Label for example"
// }
