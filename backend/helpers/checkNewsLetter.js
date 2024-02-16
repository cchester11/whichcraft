function checkHeading(param) {
      if (!param.heading) {
            throw new Error("Please provide a heading for your param entry")
      }

      if (param.heading.element != 'heading') {
            throw new Error("Please select the 'heading' option as the element choice for your heading property.")
      }

      if (typeof param.heading.text != 'string') {
            throw new Error("Please use text for the heading text entry.")
      }
}

function checkAllProperties(param) {
      // run a check that determines the newsletter is composed of multiple properties

      Object.entries(param).map(([property, value]) => {
            console.log({
                  property: property,
                  value: value
            });

            if (property === 'wine-item-1' && property === 'wine-item-2') {
                  // if fail happens in this conditional block
                  console.log('check failed at wine check');

                  if (
                        value.paragraph1 &&
                        typeof value.paragraph1.text !== 'string' ||
                        value.paragraph2 &&
                        typeof value.paragraph2.text !== 'string'
                  ) {
                        console.log(
                              'error here: ' +
                              value.paragraph1?.text,
                              'error here: ' +
                              value.paragraph2?.text
                        );
                        throw new Error(
                              'Please use text for text entries within wine-item -- no numbers or images.'
                        );
                  }

                  if (
                        value.paragraph1 &&
                        value.paragraph1.element !== 'paragraph' ||
                        value.paragraph2 &&
                        value.paragraph2.element !== 'paragraph'
                  ) {
                        console.log(
                              'Error because paragraph1 or paragraph2 of wine item not checked as paragraph type elements'
                        );
                        throw new Error('wine-items must be listed as paragraph type elements');
                  }

                  return;
            }

            if (property === 'date') {
                  if (!value.published || typeof value.published !== 'string') {
                        console.log('check failed at date property')
                        throw new Error('Date property must have a "published" field with a value in string format');
                  }
                  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
                  if (!dateRegex.test(value.published)) {
                        console.log('check failed at date property')
                        throw new Error('Published date must be in the format "MM/DD/YYYY"');
                  }
            }

            if (
                  value.element !== 'heading' &&
                  value.element !== 'published' &&
                  value.element !== 'sub-heading' &&
                  value.element !== 'list' &&
                  value.element !== 'paragraph' &&
                  value.element !== 'order' &&
                  value.element !== 'image'
            ) {
                  if (value.paragraph1) {
                        return;
                  }
                  if (value.paragraph2) {
                        return;
                  }
                  if (value.published) {
                        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
                        if (!dateRegex.test(value.published)) {
                              console.log('check failed at date property')
                              throw new Error('Published date must be in the format "MM/DD/YYYY"');
                        }

                        return;
                  }
                  // if fail happens in this conditional block
                  console.log('check failed at element check');
                  console.log(value);

                  throw new Error(
                        'You have attempted to provide an entry with a property other than those listed as choice.'
                  );
            }

            if (
                  (value.element !== 'image' && typeof value.text !== 'string') ||
                  (value.paragraph1 && typeof value.paragraph1.text !== 'string') ||
                  (value.paragraph2 && typeof value.paragraph2.text !== 'string')
            ) {
                  // if fail happens in this conditional block
                  console.log(
                        'check failed at checking text property for string data type'
                  );
                  console.log(value);
                  throw new Error('Please use text for text entries -- no numbers or images.');
            }
      });
}

module.exports = { checkHeading, checkAllProperties };