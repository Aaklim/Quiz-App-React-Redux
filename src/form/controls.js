export const lenghtControl = (value, allvalues, props, name) => {
  console.log('FromControlValue', value);
  console.log('FromControlAllvalues', allvalues);
  console.log('FromControlAllprops', props.anyTouched);
  console.log('FromControlAllname', name);
  if (props.anyTouched && !value) {
    return 'Is Empty Error';
  } else {
    return undefined;
  }
};

export const validate = (value) => {
  console.log('ValidateValue', value);
  return {};
};
