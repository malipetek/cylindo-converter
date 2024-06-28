<script >
	import { parseExcel } from '$lib/parse-excel.js';
	import toast, { Toaster } from 'svelte-french-toast';
	let metafieldData = '';

    // Event listener for paste events
    document.addEventListener('paste', function(e) {
        const pastedData = e.clipboardData.getData('text');
				toast.success('Data pasted successfully', {
					position: "bottom-center"
				});
        metafieldData = JSON.stringify(convertJSONtoMetafield(parseExcel(pastedData)), null, 2);
    });

// 		const exampleData = [
//   {
//     "Cylindo Product Code": "Group for features (colorways)",
//     "YSETCONSES": "Group 2",
//     "YSETCOJSES": "Group 1",
//     "YSETCONSKE": "Group 3",
//     "": "",
//     "YSETCONSTS": "Group 4",
//     "YSETDVFDFS": "Group 5",
//     "YSETDVKDFS": "Group 6",
//     "YSETDVKDKS": "Group 7"
//   },
//   {
//     "Cylindo Product Code": "AG Product Codes",
//     "YSETCONSES": "YSETCOLI",
//     "YSETCOJSES": "YSETCOBB",
//     "YSETCONSKE": "YSETCOGH",
//     "": "5 separate listings, GH-xyz",
//     "YSETCONSTS": "YSETCONM",
//     "YSETDVFDFS": "YSETDVAC",
//     "YSETDVKDFS": "YSETDVAA",
//     "YSETDVKDKS": "YSETDVLI"
//   },
//   {
//     "Cylindo Product Code": "(begins with)",
//     "YSETCONSES": "YSETCODD",
//     "YSETCOJSES": "YSETCOFF",
//     "YSETCONSKE": "YSETCOBU",
//     "": "3 separate listing, BU-xyz",
//     "YSETCONSTS": "YSETCOPB",
//     "YSETDVFDFS": "YSETDVCO",
//     "YSETDVKDFS": "YSETDVBR",
//     "YSETDVKDKS": "YSETDVSO"
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "YSETCOLF",
//     "YSETCONSKE": "YSETCOSV",
//     "": "1 simple product",
//     "YSETCONSTS": "COTQ",
//     "YSETDVFDFS": "YSETDVCT",
//     "YSETDVKDFS": "YSETDVBS",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "YSETCOFL",
//     "YSETCONSKE": "COPV",
//     "": "7 PV-xyz",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVDS",
//     "YSETDVKDFS": "YSETDVCO",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "YSETCOQV",
//     "YSETCONSKE": "COVC",
//     "": "4 VC-xyz",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVHB",
//     "YSETDVKDFS": "YSETDODK",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "YSETCOTX",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVIM",
//     "YSETDVKDFS": "YSETDVID",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "COPA",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVLB",
//     "YSETDVKDFS": "YSETDVNE",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "COMC",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVMA",
//     "YSETDVKDFS": "YSETDVRO",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "COLQ",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVPV",
//     "YSETDVKDFS": "YSETDVSD",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "COBQ",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVSE",
//     "YSETDVKDFS": "YSETDVSM",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVSH",
//     "YSETDVKDFS": "YSETDVTL",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVSN",
//     "YSETDVKDFS": "",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVSL",
//     "YSETDVKDFS": "",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "YSETDVTM",
//     "YSETDVKDFS": "",
//     "YSETDVKDKS": ""
//   },
//   {
//     "Cylindo Product Code": "",
//     "YSETCONSES": "",
//     "YSETCOJSES": "",
//     "YSETCONSKE": "",
//     "": "",
//     "YSETCONSTS": "",
//     "YSETDVFDFS": "DVJF",
//     "YSETDVKDFS": "",
//     "YSETDVKDKS": ""
//   }
// ];
		function convertJSONtoMetafield(data) {
			const identified_cols = {};
			const col_values = {};
			data.forEach((row, j) => {
				Object.entries(row).forEach(([key, value], i) => {
					if(value.match(/Group/)) {
						identified_cols[i] = key;
					}
					if(identified_cols[i]) {
						if(!col_values[identified_cols[i]]) {
							col_values[identified_cols[i]] = [];
						}
						col_values[identified_cols[i]].push(value);
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
			return metafield;
		}

		// metafieldData = JSON.stringify(convertJSONtoMetafield(exampleData), null, 2);
</script>


<Toaster />


<h1>Convert sheet data to metafield json</h1>
<h2> Paste sheet data to start </h2>
<button on:click={() => {
	navigator.clipboard.writeText(metafieldData)
	toast.success('Copied to clipboard successfully', {
					position: "bottom-center"
				});
	}}>Copy to clipboard</button><br><br>
<textarea value={metafieldData} rows="30" cols="50"></textarea>

