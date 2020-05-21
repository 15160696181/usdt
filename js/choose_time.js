var d1;
    window.onload = function () {
        new Rolldate({
            el: '#date-group1-2',
            format: 'YYYY-MM-DD',
            beginYear: 2000,
            endYear: 2100,
            confirm: function(date) {
                console.log(date)
                d1=date;
				}
        })
        // new Rolldate({
        //     el: '#date-group1-3',
        //     format: 'YYYY-MM-DD',
        //     beginYear: 2000,
        //     endYear: 2100
        // })
        new Rolldate({
				el: '#date-group1-3',
				format: 'YYYY-MM-DD',
				beginYear: 2000,
				endYear: 2100,
				confirm: function(date) {
                    console.log(date)
					var d2 = date; 
					if (d2 < d1) {
						alert('不能小于当前的日期');
						return false;
					}
				}
			})
    }