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
      // run a check that determines the newsletter is composed of multiple properties

      Object.entries(param).map(([property, value]) => {
            console.log({
                  property: property,
                  value: value
            })

            if(property === 'wine-item-1' && property === 'wine-item-2') {
                  // if fail happens in this conditional block
                  console.log('check failed at wine check')

                  if(typeof value.paragraph1.text !== 'string' || typeof value.paragraph2.text !== 'string') {
                        console.log("error here: " + value.paragraph1.text,"error here: " + value.paragraph2.text)
                        throw new Error("Please use text for text entries within wine-item -- no numbers or images.")
                  }

                  if(value.paragraph1.element !== 'paragraph' || value.paragraph2.element !== 'paragraph') {
                        console.log('Error because paragraph1 or paragraph2 of wine item not checked as paragraph type elements')
                        throw new Error("wine-items must be listed as paragraph type elements")
                  }

                  return;
            }

            if (value.element !== 'heading' && value.element !== 'sub-heading' && value.element !== 'list' && value.element !== 'paragraph' && value.element !== 'order') {
                  if(value.paragraph1) {
                        return;
                  }
                  if(value.paragraph2) {
                        return;
                  }

                  console.log('check failed at element check')
                  console.log(value);
                  throw new Error("You have attempted to provide an entry with a property other than those listed as choice.")
            }

            if(typeof value.text !== 'string') {
                  console.log('check failed at checking text property for string data type')
                  console.log(value.text)
                  throw new Error("Please use text for text entries -- no numbers or images.")
            }
      })
}

module.exports = { checkHeading, checkAllProperties };