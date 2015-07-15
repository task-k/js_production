	$(document).ready(function() {
		var supportIMEMode = ('ime-mode' in document.body.style);

		// 1バイト文字専用フィールド
		$('.sbc_field')
		.on('keydown blur', function() {

			// ime-modeが使えるならスキップ
			if (supportIMEMode) return;

			// 2バイト文字が入力されたら削除
			var target = $(this);
			window.setTimeout( function() {
				var v = target.val();
				target.val( filterMBC(v) );
			}, 1);
		})
		.on('paste', function() {
			// 2バイト文字が入力されたら削除
			var target = $(this);
			window.setTimeout( function() {
				var v = target.val();
				target.val( filterMBC(v) );
			}, 1);
		});

		function filterMBC(src){
			var str = '';
			src = escape(src);
			for(i = 0; i < src.length; i++){
				var chr = src.charAt(i);
				if(chr == '%'){
					if(src.charAt(++i) == 'u'){
						// 2バイト文字をスキップ
						i += 4;
						$(".alert").text("半角英数で入力してください");
						continue;
					}
					i++;
				}
				str += chr;
			}
			return str;
		}
	});

