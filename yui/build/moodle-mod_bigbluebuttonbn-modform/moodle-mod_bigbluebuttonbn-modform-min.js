YUI.add("moodle-mod_bigbluebuttonbn-modform",function(e,t){M.mod_bigbluebuttonbn=M.mod_bigbluebuttonbn||{},M.mod_bigbluebuttonbn.modform={bigbluebuttonbn:{},strings:{},init:function(e){this.bigbluebuttonbn=e,this.strings={as:M.str.bigbluebuttonbn.mod_form_field_participant_list_text_as,viewer:M.str.bigbluebuttonbn.mod_form_field_participant_bbb_role_viewer,moderator:M.str.bigbluebuttonbn.mod_form_field_participant_bbb_role_moderator,remove:M.str.bigbluebuttonbn.mod_form_field_participant_list_action_removee},this.participant_list_init()},participant_selection_set:function(){this.select_clear("bigbluebuttonbn_participant_selection");var e=document.getElementById("bigbluebuttonbn_participant_selection_type");for(var t=0;t<e.options.length;t++)if(e.options[t].selected){var n=this.bigbluebuttonbn.participant_data[e.options[t].value].children;for(var r in n)n.hasOwnProperty(r)&&this.select_add_option("bigbluebuttonbn_participant_selection",n[r].name,n[r].id);e.options[t].value==="all"?(this.select_add_option("bigbluebuttonbn_participant_selection","---------------","all"),this.select_disable("bigbluebuttonbn_participant_selection")):this.select_enable("bigbluebuttonbn_participant_selection")}},participant_list_init:function(){var e,t,n;for(var r=0;r<this.bigbluebuttonbn.participant_list.length;r++)e=this.bigbluebuttonbn.participant_list[r].selectiontype,t=this.bigbluebuttonbn.participant_list[r].selectionid,n=this.bigbluebuttonbn.participant_list[r].role,this.participant_add_to_form(e,t,n);this.participant_list_update()},participant_list_update:function(){var e=document.getElementsByName("participants")[0];e.value=JSON.stringify(this.bigbluebuttonbn.participant_list).replace(/"/g,"&quot;")},participant_remove:function(e,t){this.participant_remove_from_memory(e,t),this.participant_remove_from_form(e,t),this.participant_list_update()},participant_remove_from_memory:function(e,t){var n=t===""?null:t;for(var r=0;r<this.bigbluebuttonbn.participant_list.length;r++)this.bigbluebuttonbn.participant_list[r].selectiontype==e&&this.bigbluebuttonbn.participant_list[r].selectionid==n&&this.bigbluebuttonbn.participant_list.splice(r,1)},participant_remove_from_form:function(e,t){var n="participant_list_tr_"+e+"-"+t,r=document.getElementById("participant_list_table");for(var i=0;i<r.rows.length;i++)r.rows[i].id==n&&r.deleteRow(i)},participant_add:function(){var e=document.getElementById("bigbluebuttonbn_participant_selection_type"),t=document.getElementById("bigbluebuttonbn_participant_selection");for(var n=0;n<this.bigbluebuttonbn.participant_list.length;n++)if(this.bigbluebuttonbn.participant_list[n].selectiontype==e.value&&this.bigbluebuttonbn.participant_list[n].selectionid==t.value)return;this.participant_add_to_memory(e.value,t.value),this.participant_add_to_form(e.value,t.value,"viewer"),this.participant_list_update()},participant_add_to_memory:function(e,t){this.bigbluebuttonbn.participant_list.push({selectiontype:e,selectionid:t,role:"viewer"})},participant_add_to_form:function(e,t,n){var r=document.getElementById("participant_list_table"),i=r.insertRow(r.rows.length);i.id="participant_list_tr_"+e+"-"+t;var s=i.insertCell(0);s.width="125px",s.innerHTML="<b><i>"+this.bigbluebuttonbn.participant_data[e].name,s.innerHTML+=(e!=="all"?":&nbsp;":"")+"</i></b>";var o=i.insertCell(1);o.innerHTML="",e!=="all"&&(o.innerHTML=this.bigbluebuttonbn.participant_data[e].children[t].name);var u=' selected="selected"',a;a="&nbsp;<i>"+this.strings.as+"</i>&nbsp;",a+='<select id="participant_list_role_'+e+"-"+t+'"',a+=" onchange=\"M.mod_bigbluebuttonbn.modform.participant_list_role_update('",a+=e+"', '"+t,a+='\'); return 0;" class="select custom-select">';var f=["viewer","moderator"];for(var l=0;l<f.length;l++)f[l]===n?a+='<option value="'+n+'"'+u+">"+this.strings.viewer+"</option>":a+='<option value="'+n+'">'+this.strings.viewer+"</option>";a+='<option value="viewer"'+(n==="viewer"?u:"")+">"+this.strings.viewer+"</option>",a+='<option value="moderator"'+(n==="moderator"?u:"")+">"+this.strings.moderator+"</option>",a+="</select>";var c=i.insertCell(2);c.innerHTML=a;var h=i.insertCell(3);h.width="20px";var p="x";this.bigbluebuttonbn.icons_enabled&&(p=this.bigbluebuttonbn.pix_icon_delete),a='<a class="btn btn-link" onclick="M.mod_bigbluebuttonbn.modform.participant_remove(\'',a+=e+"', '"+t,a+='\'); return 0;" title="'+this.strings.remove+'">'+p+"</a>",h.innerHTML=a},participant_list_role_update:function(e,t){var n=document.getElementById("participant_list_role_"+e+"-"+t);for(var r=0;r<this.bigbluebuttonbn.participant_list.length;r++)this.bigbluebuttonbn.participant_list[r].selectiontype==e&&this.bigbluebuttonbn.participant_list[r].selectionid==(t===""?null:t)&&(this.bigbluebuttonbn.participant_list[r].role=n.value);this.participant_list_update()},select_clear:function(e){var t=document.getElementById(e);while(t.length>0)t.remove(t.length-1)},select_enable:function(e){var t=document.getElementById(e);t.disabled=!1},select_disable:function(e){var t=document.getElementById(e);t.disabled=!0},select_add_option:function(e,t,n){var r=document.getElementById(e),i=document.createElement("option");i.text=t,i.value=n,r.add(i,i.length)}}},"@VERSION@",{requires:["base","node"]});
