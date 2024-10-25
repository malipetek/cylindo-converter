export default function convertJSONtoMetafield(data, testCallback = ({}) => 1) {
  const identified_cols = {};
  const identified_col_templates = {};
    const col_values = {};
    data.forEach((row, j) => {
      Object.entries(row).forEach(([key, value], i) => {
        // console.log('key ', key, value);
        if(value.match(/_+/gim)) {
          identified_col_templates[i] = value;
        }
        if (value.match(/Group/)) {
          // exception for groups with underscore
          identified_cols[i] = key;
        }
        if (identified_cols[i]) {
          if (identified_col_templates[i] && value) {
            const valuePartsToBeConsumed = value.split('-').reverse();
            // console.log('valuePartsToBeConsumed ', valuePartsToBeConsumed);
            const newValue = identified_col_templates[i].replace(/_+/gim, (a, underscore) => {
              return valuePartsToBeConsumed.pop();
            });

            if (!col_values[identified_cols[i]]) {
              col_values[identified_cols[i]] = [];
            }
            col_values[identified_cols[i]].push(newValue);
            // console.log('identified_col_templates[i]', identified_col_templates[i], value);
          } else {
            if(!col_values[identified_cols[i]]) {
              col_values[identified_cols[i]] = [];
            }
            col_values[identified_cols[i]].push(value);
          }
        }
      });
    })

    
    const metafield = {};
    Object.entries(col_values).forEach(([key, value]) => {
      col_values[key] = value.filter(Boolean).filter((v,i) => i > 0);
      col_values[key].forEach((v, i) => {
        metafield[v] = key;
      });
    });
  
    // console.log('identified_col_templates', identified_col_templates);
    testCallback({
      identified_cols,
      col_values,
      identified_col_templates,
      metafield
    });
    return metafield;
}