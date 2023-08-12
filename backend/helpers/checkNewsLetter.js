function checkHeading (param) {
      if(!param.heading) {
            throw new Error("Please provide a heading for your param entry")
      }

      if(param.heading.element != 'heading') {
            throw new Error("Please select the 'heading' option as the element choice for your heading property.")
      }

      if(typeof param.heading.text != 'string') {
            throw new Error("Please use text for the heading text entry.")
      }
}

function checkAllProperties (param) {
      Object.entries(param).map(([property, value]) => {
            console.log({
                  property: property,
                  value: value
            })

            if (value.element !== 'heading' && value.element !== 'sub-heading' && value.element !== 'list' && value.element !== 'paragraph') {
                  console.log(value.element);
                  throw new Error("You have attempted to provide an entry with a property other than those listed as choice.")
            }

            if(typeof value.text !== 'string') {
                  console.log(value.text)
                  throw new Error("Please use text for text entries -- no numbers or images.")
            }
      })
}

module.exports = { checkHeading, checkAllProperties };