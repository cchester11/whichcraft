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

module.exports = checkHeading;