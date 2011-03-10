/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',62,441,'||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83'.split('|'),0,{}))
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by David Simmons-Duffin and Marty Kube
	
		var funcs = 
			'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 
			'chroot close closedir connect cos crypt defined delete each endgrent ' + 
			'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 
			'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 
			'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 
			'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 
			'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 
			'getservbyname getservbyport getservent getsockname getsockopt glob ' + 
			'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 
			'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 
			'oct open opendir ord pack pipe pop pos print printf prototype push ' + 
			'quotemeta rand read readdir readline readlink readpipe recv rename ' + 
			'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 
			'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 
			'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 
			'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 
			'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 
			'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 
			'undef unlink unpack unshift utime values vec wait waitpid warn write';
    
		var keywords =  
			'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
			'for foreach goto if import last local my next no our package redo ref ' + 
			'require return sub tie tied unless untie until use wantarray while';
    
		this.regexList = [
			{ regex: new RegExp('#[^!].*$', 'gm'),					css: 'comments' },
			{ regex: new RegExp('^\\s*#!.*$', 'gm'),				css: 'preprocessor' }, // shebang
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			{ regex: new RegExp('(\\$|@|%)\\w+', 'g'),				css: 'variable' },
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),	css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }
		    ];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perl', 'Perl', 'pl'];

	SyntaxHighlighter.brushes.Perl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
(function(t,p){(function(q){var e=t.simplegeo;if(e===p)e={};if(e.Client===p){e.Client=function(c,a){if(!(this instanceof e.Client))return new e.Client(c,a);a=a||{};this.token=c;this.options=a;this.host=a.host||"api.simplegeo.com";this.port=a.port||"80";this.apiUrl="http://"+this.host+":"+this.port;this.name="Client"};var m=t.navigator;e.Client.prototype={request:function(c,a,d){a.token=this.token;a=q.param(a)+"&callback=?";q.ajax({url:this.apiUrl+c,dataType:"json",data:a,success:function(j){if(j.error){var n=
Error(j.message);n.code=j.code;d(n)}else d(null,j.data)},error:function(j,n,u){d(u)}})},getFeature:function(c,a,d){if(d===p){d=a;a={}}return this.request("/1.0/features/"+c+".json",a,d)},watchLocationFromBrowser:function(c,a){if(a===p){a=c;c={}}m&&m.geolocation?m.geolocation.watchPosition(function(d){d.source="navigator";a(null,d)},function(d){a(d)},c):a(Error("navigator.geolocation not available"))},getLocationFromBrowser:function(c,a){if(a===p){a=c;c={}}m&&m.geolocation?m.geolocation.getCurrentPosition(function(d){d.source=
"navigator";a(null,d)},function(d){a(d)},c):a(Error("navigator.geolocation not available"))},getLocationFromIP:function(c,a){var d;if(a===p){a=c;d="/0.1/locate.json"}else d="/0.1/locate/"+c+".json";return this.request(d,{},function(j,n){j?a(j):a(null,{coords:{latitude:n.geometry.coordinates[1],longitude:n.geometry.coordinates[0],accuracy:1E5},timestamp:new Date,source:"simplegeo"})})},getLocation:function(c,a){var d=this;if(a===p){a=c;c={}}d.getLocationFromBrowser(c,function(j,n){j?d.getLocationFromIP(a):
a(null,n)})}}}e.ContextClient=function(c,a){if(!(this instanceof e.ContextClient))return new e.ContextClient(c,a);e.Client.call(this,c,a);this.name="ContextClient"};e.ContextClient.prototype=new e.Client;e.ContextClient.prototype.getContext=function(c,a,d){return this.request("/1.0/context/"+c+","+a+".json",{},d)};e.ContextClient.prototype.getContextFromIP=function(c,a){if(a===p){a=c;c="ip"}return this.request("/1.0/context/"+c+".json",{},a)};e.ContextClient.prototype.getContextFromAddress=function(c,
a){return this.request("/1.0/context/address.json",{address:c},a)};t.simplegeo=e})(function(q,e){var m=q.document,c=(new Date).getTime(),a=/=\?(&|$)/,d=/(\?|&)_=.*?(&|$)/,j=/\?/,n=/%20/g,u=Object.prototype.toString,o={isFunction:function(b){return u.call(b)==="[object Function]"},isArray:function(b){return u.call(b)==="[object Array]"},each:function(b,g,i){var k,l=0,h=b.length,f=h===e||o.isFunction(b);if(i)if(f)for(k in b){if(g.apply(b[k],i)===false)break}else for(;l<h;){if(g.apply(b[l++],i)===false)break}else if(f)for(k in b){if(g.call(b[k],
k,b[k])===false)break}else for(i=b[0];l<h&&g.call(i,l,i)!==false;i=b[++l]);return b},param:function(b){function g(h,f){if(o.isArray(f))o.each(f,function(s,r){/\[\]$/.test(h)?i(h,r):g(h+"["+(typeof r==="object"||o.isArray(r)?s:"")+"]",r)});else f!=null&&typeof f==="object"?o.each(f,function(s,r){g(h+"["+s+"]",r)}):i(h,f)}function i(h,f){f=o.isFunction(f)?f():f;k[k.length]=encodeURIComponent(h)+"="+encodeURIComponent(f)}var k=[];if(o.isArray(b)||b.jquery)o.each(b,function(){i(this.name,this.value)});
else for(var l in b)g(l,b[l]);return k.join("&").replace(n,"+")},ajax:function(b){var g,i;if(b.data&&typeof b.data!=="string")b.data=o.param(b.data);g=b.jsonpCallback||"jsonp"+c++;if(b.data)b.data=(b.data+"").replace(a,"="+g+"$1");b.url=b.url.replace(a,"="+g+"$1");q[g]=q[g]||function(s){i=s;b.success&&b.success.call(b,i,void 0);b.complete&&b.complete.call(b,e,void 0);q[g]=e;try{delete q[g]}catch(r){}h&&h.removeChild(f)};var k=(new Date).getTime(),l=b.url.replace(d,"$1_="+k+"$2");b.url=l+(l===b.url?
(j.test(b.url)?"&":"?")+"_="+k:"");b.url+=(j.test(b.url)?"&":"?")+b.data;var h=m.getElementsByTagName("head")[0]||m.documentElement,f=m.createElement("script");f.src=b.url;h.insertBefore(f,h.firstChild);return e}};return o}(t))})(window);
Ext.ns('Pad');
var Util = {
    loadPage: function(page) {
        var parts = page.split(/\//);
        parts.shift();
        if (parts[0] == 'mirrors') {
            Pad.UI.TabPanel.add(new Pad.Mirrors);
        } else if (parts[0] == 'recent') {
            Pad.UI.TabPanel.add(new Pad.Recent);
        } else if (parts[0] == 'pod' && parts.length > 3) {
            parts.shift();
            Pad.UI.TabPanel.add(new Pad.Reader.Pod({
                author: parts.shift(),
                release: parts.shift(),
                path: parts.join("/"),
            }));
        } else if (parts[0] == 'pod' && parts.length == 2) {
            Pad.UI.TabPanel.add(new Pad.Reader.Pod({
                title: parts[1]
            }));
        } else if (parts[0] == 'author') {
            Pad.UI.TabPanel.add(new Pad.Author({
                title: parts[1]
            }));
        }
    },
    location: null,
    getLocation: function(cb) {
        if(Util.location) return cb(Util.location);
        var client = new simplegeo.ContextClient('rGXAMBGT59UEhynt9q6qHDsFDJBpFJYk');
        return client.getLocationFromIP( function(err, pos) {
            Util.location = pos;
            cb(pos);
            client.getLocationFromBrowser({enableHighAccuracy: true, maximumAge: 60000}, function(err, pos) {
                    Util.location = pos;
                    cb(pos);
            });
        });
    },
    dateRenderer: function(value) {
        if(!value) return "undefined";
        return Date.parseDate(value, 'c').format('j M Y');
    },
    dateTimeRenderer: function(value) {
        if(!value) return "undefined";
        return Date.parseDate(value, 'c').format('j M Y, H:i:s');
    },
    currencyRenderer: function(value) {
        return Ext.util.Format.number(value, '0.0,00') + " €";
    },
    boolRenderer: function(value) {
        var checked = value && value != 0 ? 'checked="cheked"' : '';
        return '<input type="checkbox" disabled="disabled"' + checked + ' />';
    },
    percentageRenderer: function(value) {
        return Ext.util.Format.number(value * 100, '0.0,00') + ' %';
    },
    distanceRenderer: function(value) {
        return Ext.util.Format.number(value, '0.0,') + ' km';
    },
    taxRenderer: function(value, dom, res) {
        return Util.boolRenderer(res.data.tax_included) + ' &nbsp;&nbsp; ' + Ext.util.Format.number(value * 100, '0.0/i') + ' %';
    },
    urlRenderer: function(value) {
        return "<a href=\"/page/" + value + "\" target=\"_blank\">" + value + "</a>";
    },
    protocolRenderer: function(value, dom, res) {
        var pr = [];
        if(res.data.http) {
            pr.push('<a href="' + res.data.http + '" target="_blank">http</a>');
        }
        if(res.data.ftp) {
            pr.push('<a href="' + res.data.ftp + '" target="_blank">ftp</a>');
        }
        if(res.data.rsync) {
            pr.push('<a href="' + res.data.rsync + '" target="_blank">rsync</a>');
        }
        return pr.join(" ");
    }
};var API= { url: 'http://localhost:5000' };var Author;
Author = {
    search: function(params, cb) {
        Ext.Ajax.request({
            url: API.url + '/author/_search',
            jsonData: {
                "size": 20,
                "fields": ['pauseid', 'name'],
                "query": {
                    "dis_max": {
                        "tie_breaker" : 0.7,
                        "queries": [{
                            "field": {
                                "name": {
                                    "query": params.query + "*",
                                    "boost": 0.9 }
                            }
                        },
                        {
                            "prefix": {
                                "pauseid":  params.query.toUpperCase()
                            }
                        }]
                    }
                }
            },
            success: function(res) {
                var mods = Ext.decode(res.responseText);
                var hits = mods.hits.hits;
                var result = [];
                for(var i = 0; i < hits.length; i++) {
                    result.push(hits[i].fields);
                }
                cb(result);
            }
        });
    }
};var File;
File = {
    source: function(author, release, path, cb) {
        var reqs = 0;
        var source = {};
        Ext.Ajax.request({
            url: API.url + '/file/' + [author, release, path].join("/"),
            success: function(res) {
                var file = Ext.decode(res.responseText);
                Ext.copyTo(source, file, ['sloc', 'slop', 'pod_lines', 'stat']);
                reqs++;
                if(reqs == 2) cb(source);
            }
        });
        Ext.Ajax.request({
            url: API.url + '/source/' + [author, release, path].join("/"),
            success: function(res) {
                source.source = res.responseText;
                reqs++;
                if(reqs == 2) cb(source);
            }
        });
    }
};var Mirror = {
    byLocation: function(param, cb) {
        if (!param.coords) {
            return Util.getLocation(function(pos) {
                Ext.apply(param, pos);
                Mirror.byLocation(param, cb);
            });
        }

        var orQuery = [];
        Ext.each(['http', 'ftp', 'rsync'], function(p) {
            if(!param[p]) return;
            orQuery.push({
                not: {
                    filter: {
                        missing: {
                            field: p
                        }
                    }
                }
            });
        });
        Ext.Ajax.request({
            url: API.url + '/mirror/_search',
            jsonData: {
                size: param.limit || 50,
                from: param.start || 0,
                query: {
                    match_all: {}
                },
                filter: {
                    or: orQuery
                },
                fields: param.fields,
                sort: {
                    _geo_distance: {
                        location: [param.coords.longitude, param.coords.latitude],
                        order: "asc",
                        unit: "km"
                    }
                }
            },
            success: function(res) {
                res = Ext.decode(res.responseText);
                var hits = res.hits.hits;
                var result = [];

                for (var i = 0; i < hits.length; i++) {
                    hits[i].fields.distance = hits[i].sort[0];
                    result.push(hits[i].fields);
                }
                cb({
                    data: result,
                    total: res.hits.total
                });
            }
        });
    }
};var Module;
Module = {
    list: function() {},
    get: function(module, cb) {
        Ext.Ajax.request({
            url: API.url + '/module/' + module,
            success: function(res) {
                var obj = Ext.decode(res.responseText);
                cb(obj);
            }
        });
    },
    pod: function(param, cb) {
        if (!param.path) return Module.get(param.name, function(mod) {
            if (mod.path) Module.pod(mod, cb);
        });
        var reqs = 0;
        Ext.Ajax.request({
            url: API.url + '/file/' + [param.author, param.release, param.path].join("/"),
            success: function(res) {
                var file = Ext.decode(res.responseText);
                Ext.copyTo(param, file, ['toc', 'module']);
                reqs++;
                if (reqs == 2) cb(param);
            }
        });
        Ext.Ajax.request({
            url: API.url + '/pod/' + [param.author, param.release, param.path].join("/"),
            success: function(res) {
                param.html = res.responseText;
                reqs++;
                if (reqs == 2) cb(param);
            }
        });
    },
    code: function(param, cb) {
        if (!param.path) return Module.get(param.name, function(mod) {
            if (mod.path) Module.code(mod, cb);
        });

        var reqs = 0;
        Ext.Ajax.request({
            url: API.url + '/file/' + [param.author, param.release, param.path].join("/"),
            success: function(res) {
                var file = Ext.decode(res.responseText);
                Ext.copyTo(param, file, ['sloc', 'slop', 'pod_lines', 'stat']);
                reqs++;
                if (reqs == 2) cb(param);
            }
        });
        Ext.Ajax.request({
            url: API.url + '/source/' + [param.author, param.release, param.path].join("/"),
            success: function(res) {
                param.source = res.responseText;
                reqs++;
                if (reqs == 2) cb(param);
            }
        });

    },
    search: function(params, cb) {
        params.query = params.query.replace(/::/g, " ");
        var q = params.query.split(/ /);
        for (var i = 0; i < q.length; i++) {
            q[i] = {
                prefix: {
                    name: q[i]
                }
            };
        }
        q.push({
            term: {
                status: 'latest'
            }
        });
        Ext.Ajax.request({
            url: API.url + '/module/_search',
            jsonData: {
                query: {
                    match_all: {}
                },
                sort: ['name.raw'],
                filter: {
                    and: q
                },
                fields: ['name', 'release', 'author', 'file']
            },
            success: function(res) {
                var mods = Ext.decode(res.responseText);
                var hits = mods.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    result.push(hits[i].fields);
                }
                cb(result);
            }
        });
    }
};var Release;
Release = {
    documentation: function(param, cb) {
        Ext.Ajax.request({
            url: API.url + '/file/_search',
            jsonData: {
                size: param.limit || 50,
                from: param.start || 0,
                query: {
                    match_all: {}
                },
                filter: {
                    and: [{
                        term: {
                            release: param.release
                        }
                    },
                    {
                        term: {
                            author: param.author
                        }
                    },
                    {
                        term: {
                            indexed: true
                        }
                    },
                    {
                        not: {
                            filter: {
                                missing: {
                                    field: "pod"
                                }
                            }
                        }
                    }]
                },
                sort: ['module'],
                fields: ['module', 'name', 'path', 'id', 'release', 'author']
            },
            success: function(res) {
                var deps = Ext.decode(res.responseText);
                var hits = deps.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    result.push(hits[i].fields);
                }
                cb({
                    data: result,
                    total: deps.hits.total
                });
            }
        });

    },
    recent: function(param, cb) {
        Ext.Ajax.request({
            url: API.url + '/release/_search',
            jsonData: {
                size: param.limit || 50,
                from: param.start || 0,
                query: {
                    match_all: {}
                },
                sort: [{
                    'date': {
                        reverse: true
                    }
                }],
                fields: ['name', 'version', 'abstract', 'date', 'distribution', 'download_url']
            },
            success: function(res) {
                var deps = Ext.decode(res.responseText);
                var hits = deps.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    hits[i].fields.day = Date.parseDate(hits[i].fields.date, "c");
                    result.push(hits[i].fields);
                }
                cb({
                    data: result,
                    total: deps.hits.total
                });
            }
        });
    },
    byAuthor: function(param, cb) {
        Ext.Ajax.request({
            url: API.url + '/release/_search',
            jsonData: {
                size: param.limit || 50,
                from: param.start || 0,
                query: {
                    match_all: {}
                },
                filter: {
                    term: {
                        author: param.author,
                    }
                },
                sort: ['distribution', {
                    'version_numified': {
                        reverse: true
                    }
                }],
                fields: ['name', 'version', 'abstract', 'date', 'distribution']
            },
            success: function(res) {
                var deps = Ext.decode(res.responseText);
                var hits = deps.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    result.push(hits[i].fields);
                }
                cb({
                    data: result,
                    total: deps.hits.total
                });
            }
        });
    },
    dependencies: function(param, cb) {
        Ext.Ajax.request({
            url: API.url + '/dependency/_search',
            jsonData: {
                size: 1000,
                query: {
                    match_all: {}
                },
                filter: {
                    and: [{
                        term: {
                            author: param.author,
                        }
                    },
                    {
                        term: {
                            release: param.release,
                        }
                    },
                    {
                        term: {
                            phase: 'runtime',
                        }
                    },
                    ]
                },
                sort: ['module'],
                fields: ['module', 'version']
            },
            success: function(res) {
                var deps = Ext.decode(res.responseText);
                var hits = deps.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    result.push(hits[i].fields);
                }
                cb(result);
            }
        });
    },
    files: function(param, cb) {
        Ext.Ajax.request({
            url: API.url + '/file/_search',
            jsonData: {
                size: 1000,
                query: {
                    match_all: {

                    }
                },
                filter: {
                    and: [{
                        term: {
                            level: param.level
                        }
                    },
                    {
                        term: {
                            author: param.author
                        }
                    },
                    {
                        term: {
                            release: param.release
                        }
                    },
                    {
                        prefix: {
                            path: param.prefix
                        }
                    }]
                },
                fields: ['module', 'path', 'level', 'name', 'directory']
            },
            success: function(res) {
                var files = Ext.decode(res.responseText);
                var hits = files.hits.hits;
                var result = [];
                for (var i = 0; i < hits.length; i++) {
                    var data = hits[i].fields;
                    result.push({
                        text: data.name,
                        module: data.module,
                        path: data.path,
                        level: data.level,
                        leaf: data.directory == "true" ? false : true
                    });
                }
                cb(result);
            }
        });
    },
};Ext.ns('Pad.CardPortlet');

Pad.CardPortlet = Ext.extend(Ext.Panel, {
    layout: 'card',
    cls: 'x-portlet',
    height: 200,
    title: 'Browser',
    activeItem: 0,
    iconCls: 'silk-bricks',
    anchor: '100%',
    frame: true,
    identifier: 'distribution',
    collapsible: true,
    draggable: true,
    add: function(c, count) {
        var found = this.find(this.identifier, c[this.identifier]);
        if (found && found[0]) {
            if(count) found[0].references++;
            return this.activate(found[0]);
        }

        if(Ext.isArray(c)) return;
        c = Ext.ComponentMgr.create(c);
        var comp = Pad.CardPortlet.superclass.add.call(this, c);
        comp.on('beforeload', this.onBeforeLoad, this)
        comp.on('load', this.onLoad, this)
        comp.on('exception', this.onLoad, this)
        this.activate(c);
        return c;
    },
    remove: function(c) {
        var found = this.find(this.identifier, c[this.identifier]);
        if(!found || !found[0]) return;
        found[0].references--;
        if(found[0].references) return;
        return Pad.CardPortlet.superclass.remove.call(this, found[0]);
    },
    activate: function(c) {
        //this.setTitle(c.distribution);
        if (this.rendered) this.layout.setActiveItem(c);
    },
    initComponent: function() {
        this.initTools();
        this.plugins = new Ext.ux.PanelResizer({
                    minHeight: 100
        });
        Pad.CardPortlet.superclass.initComponent.call(this);
    },
    initTools: function() {
        this.addTool({
            id: 'down',
            handler: this.showMenu.createDelegate(this, [])
        });
    },
    onBeforeLoad: function(node) {
        this.oldIconCls = this.iconCls;
        this.setIconClass('silk-loading');
    },
    onLoad: function(ev) {
        this.setIconClass(this.oldIconCls);
        var c = this.layout.activeItem;
        var found = this.find(this.identifier, c[this.identifier]);
        if(found.length > 1) {
            found[found.length-1].destroy();
            this.activate(found[0]);
        }
    },
    onException: function(proxy, type, action, options) {
        console.log(proxy, type, action, options);
    },
    selectFromMenu: function(m) {
        var add = {};
        add[this.identifier] = m.text
        this.add(add);
    },
    showMenu: function() {
        var menu = new Ext.menu.Menu();
        var that = this;
        this.items.each(function(c) {
            menu.add({
                text: c[that.identifier],
                iconCls: 'silk-bricks',
                handler: that.selectFromMenu,
                scope: that
            });
        });
        if(this.items.length) menu.show(this.getTool('down'));
    },
});Pad.DataProxy = Ext.extend(Ext.data.DataProxy, {
    doRequest: function(action, rs, params, reader, callback, scope, options) {
        this.api[action](params, (function(res) {
            this.fireEvent('load');
            callback.call(scope, {
                records: reader.extractData(Ext.isArray(res) ? res : res.data, true),
                success: true,
                totalRecords: Ext.isArray(res) ? res.length : res.total
            }, options, true);
        }).createDelegate(this));
    },
    
});Pad.Files = Ext.extend(Ext.tree.TreePanel, {
    autoScroll: true,
    rootVisible: true,
    anchor: '100%',
    animate: false,
    xtype: 'padfiles',
    references: 0,
    cls: 'x-portlet',
    initComponent: function() {
        var that = this;
        Ext.apply(this, {
            root: {
                id: this.author + "/" + this.release,
                text: this.author + "/" + this.release,
                expanded: true,
                level: -1,
            }
        });
        
        Pad.Files.superclass.initComponent.call(this, arguments);
        var iconCls = this.iconCls;
        this.on('click', this.onClick, this);
        this.on('load', this.onLoad, this);

    },
    loader: new Ext.tree.TreeLoader({
        load: function(node, cb, scope) {
            var tree = node.ownerTree;
            var that = this;
            var level = node.attributes.level + 1;
            Release.files({ author: tree.author, release: tree.release, level: level, prefix: level == 0 ? '' : node.attributes.path }, function(result) {
            that.handleResponse({
                            responseData: Ext.isArray(result) ? result : null,
                            responseText: result,
                            argument: { node: node, callback: cb, scope: scope }
                        });
                    });
        }
    }),
    onRender: function(tree) {
        Pad.Files.superclass.onRender.call(this, tree);
        new Ext.tree.TreeSorter(this, {
            folderSort: true
        });

    },
    onLoad: function() {
        if (!this.root.firstChild) return this.root.on('expand', this.destroy, this);
    },
    onClick: function(node, e) {
        var pod;
        if (node.hasChildNodes()) return node.toggle();

        var file = node.attributes.path;

        if (node.attributes.module && !e.shiftKey) pod = new Pad.Reader.Pod({
            title: node.attributes.module,
            release: this.release,
            author: this.author,
            path: file,
        });
        else if (node.attributes.module) pod = new Pad.Reader.Source.Code({
            title: node.attributes.module,
            release: this.release,
            author: this.author,
            path: file,
        });
        else pod = new Pad.Reader.Source({
            title: node.attributes.text,
            author: this.author,
            release: this.release,
            path: file,
        });
        Pad.UI.TabPanel.add(pod);

    }

});

Ext.reg('padfiles', Pad.Files);Ext.ns('Pad.FilesPanel');

Pad.FilesPanel = Ext.extend(Pad.CardPortlet, {
    identifier: 'release',
    title: 'Files',
});Pad.GoToComboBox = Ext.extend(Ext.form.ComboBox, {
    expand: function() {},
    afterRender: function() {
        Pad.GoToComboBox.superclass.afterRender.call(this, arguments);
        this.list.setStyle({
            left: null,
            top: null,
            height: null,
            width: null,
            position: null,
            "border-width": 0
        });
        this.list.first().setStyle({
            width: null,
            height: 121,
            overflow: 'auto',
            "border-width": 0
        });
        this.keyNav.enter = function(e){
            this.shift = e.shiftKey;
            this.onViewClick();
        };
        this.keyNav.esc = null;
    },
    collapse: function() {},
    restrictHeight: function() {},
});

Pad.GoTo = Ext.extend(Ext.Window, {
    layout: 'border',
    width: 300,
    iconCls: 'silk-package',
    height: 200,
    border: false,
    tpl: '<tpl for="."><div class="x-combo-list-item">{name}</div></tpl>',
    store: {
        root: 'data',
        fields: ['pauseid', 'name', 'release', 'file'],
    },
    combo: {
        region: 'north',
        height: 20,
        xtype: 'combo',
        minChars: 2,
        queryDelay: 100,
        maxHeight: 50,
        shadow: false,
        loadingText: null,
        valueField: 'name',
        displayField: 'name',
        triggerAction: 'all',
        lazyInit: false,
        hideTrigger: true,
        listeners: {
            afterrender: function(el) {
                el.focus(true, 100);
            },
        }
    },
    list: {
        region: 'center',
        title: 'Results',
    },
    initComponent: function() {
        var that = this;
        this.combo = new Pad.GoToComboBox(Ext.applyIf({ tpl: this.tpl }, this.combo));
        this.list = new Ext.Panel(this.list);
        
        this.store.proxy = new Pad.DataProxy({ api: { read: this.api } }),
        this.combo.store = new Ext.data.JsonStore(this.store);
        Ext.apply(this, {
            items: [this.combo, this.list]
        });
        Pad.GoTo.superclass.initComponent.call(this, arguments);
    },
    initEvents: function() {
        Pad.GoTo.superclass.initEvents.call(this, arguments);
        var that = this;
        this.combo.on('select', this.onSelect, this);
        this.combo.getStore().on('beforeload', function() {
            that.setIconClass('silk-loading');
        });
        this.combo.getStore().on('load', function() {
            that.setIconClass('silk-package');
        });
        this.combo.on('specialkey', function(e) {console.log(e)});

    },
    afterRender: function() {
        Pad.GoTo.superclass.afterRender.call(this, arguments);
        this.combo.list.appendTo(this.list.body);
        this.combo.list.show();

    }
});Pad.GoTo.Author = Ext.extend(Pad.GoTo, {
    title: 'Go to author',
    api: Author.search,
    tpl: '<tpl for="."><div class="x-combo-list-item">{pauseid} <div style="float:right">({name})</div></div></tpl>',
    onSelect: function(combo, r) {
        Pad.UI.TabPanel.add(new Pad.Author({ title: r.get('pauseid') }));
        this.close();
    }
});

new Ext.KeyMap(document, {
    key: "a",
    crtl: true,
    alt: true,
    fn: function(a, e) {
        (new Pad.GoTo.Author()).show();
        e.preventDefault();
    },
});Pad.GoTo.Module = Ext.extend(Pad.GoTo, {
    title: 'Go to module',
    api: Module.search,
    
    onSelect: function(combo, r) {
        var pod;
        if (combo.shift) {
            pod = new Pad.Reader.Source.Code({
                title: r.data.name,
                release: r.data.release,
                path: r.data.path,
            });
        } else {
            pod = new Pad.Reader.Pod({
                title: r.data.name,
                release: r.data.release,
                path: r.data.path,
            });
        }
        Pad.UI.TabPanel.add(pod);
        this.close();
    }
});

new Ext.KeyMap(document, {
    key: "m",
    crtl: true,
    alt: true,
    fn: function(a, e) {
        (new Pad.GoTo.Module()).show();
        e.preventDefault();
    }
});Pad.GridPanel = Ext.extend(Ext.grid.GridPanel, {
    api: null,
    stripeRows: true,
    store: {
        autoLoad: false,
        remoteSort: true,
        baseParams: {
            limit: 50
        },
        root: 'data',
        //groupOnSort: true,
        groupField: 'distribution',
    },
    buildFields: function() {
        var fields = [];
        for(var i = 0; i < this.cm.length; i++) {
            fields.push(this.cm[i].dataIndex);
        }
        return fields;
    },
    initComponent: function() {
        if(!this.fields) this.fields = this.buildFields();
        Ext.apply(this.store, {
            listeners: {
                exception: this.onException.createDelegate(this)
            },
            reader: new Ext.data.JsonReader({fields: this.fields}),
            proxy: new Pad.DataProxy({
                api: this.api
            }),
            groupField: this.groupField,
            sortInfo: this.sortInfo,
            baseParams: { fields: this.fields }
        });
        this.store = new Ext.data.GroupingStore(this.store);
        this.view = new Ext.grid.GroupingView();
        if (this.cm[0].id != 'numberer') this.cm.unshift(new Ext.grid.RowNumberer({ width: 28 }));
        Ext.apply(this, {
            region: 'center',
            cm: new Ext.grid.ColumnModel(this.cm),
            store: this.store,
            bbar: new Ext.PagingToolbar({
                pageSize: 50,
                store: this.store,
                displayInfo: true,
            })
        });
        Pad.GridPanel.superclass.initComponent.call(this, arguments);
        this.initEvents();
    },
    onRender: function(c) {
        Pad.GridPanel.superclass.onRender.call(this, c);
        this.getStore().load();
    },
    initEvents: function() {
        this.store.on('load', this.onLoad, this);

    },
    onLoad: function(store) {
        
    },
    onException: function(proxy, type, action, options, response, arg) {
        Ext.Msg.show({
            title: 'Fehler',
            msg: 'Die Suche konnte nicht ausgeführt werden.',
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR
        });
        this.onLoad();
    }
});Pad.GridPanel.Mirror = Ext.extend(Pad.GridPanel, {
    title: 'Mirrors',
    iconCls: 'silk-page',
    api: {
        read: Mirror.byLocation
    },
    autoExpandColumn: 'org',
    cm: [{
        header: "Name",
        width: 100,
        sortable: true,
        dataIndex: 'name'
    },
    {
        header: "Organization",
        id: 'org',
        sortable: true,
        dataIndex: 'org'
    },
    {
        header: "City",
        width: 100,
        sortable: true,
        dataIndex: 'city'
    },
    {
        header: "Region",
        width: 100,
        sortable: true,
        dataIndex: 'region',
        hidden: true
    },
    {
        header: "Country",
        width: 100,
        sortable: true,
        dataIndex: 'country'
    },
    {
        header: "Continent",
        width: 100,
        sortable: true,
        dataIndex: 'continent'
    },
    {
        header: "Protocols",
        width: 90,
        sortable: true,
        dataIndex: 'none',
        renderer: Util.protocolRenderer
    },
    {
        header: "Distance",
        width: 70,
        sortable: true,
        dataIndex: 'distance',
        align: 'right',
        renderer: Util.distanceRenderer,
    },
    {
        dataIndex: 'http',
        hidden: true
    },
    {
        dataIndex: 'rsync',
        hidden: true
    },
    {
        dataIndex: 'ftp',
        hidden: true
    },
    {
        dataIndex: 'location',
        hidden: true
    },
    {
        header: "Inception",
        width: 90,
        sortable: true,
        dataIndex: 'inceptdate',
        align: 'right',
        renderer: Util.dateRenderer
    },
    ],
    initComponent: function() {
        this.tbar = ['->', 'Toggle protocols:', {
            text: 'http',
            enableToggle: true,
            handler: this.toggleProtocol,
            scope: this,
            pressed: true
        },
        ' ', {
            text: 'ftp',
            enableToggle: true,
            handler: this.toggleProtocol,
            scope: this,
            pressed: true
        },
        ' ', {
            text: 'rsync',
            enableToggle: true,
            handler: this.toggleProtocol,
            scope: this,
            pressed: true
        }];
        Pad.GridPanel.Mirror.superclass.initComponent.call(this, arguments);
        this.store.on('beforeload', this.loadProtocols, this);
    },
    loadProtocols: function(store) {
        this.getTopToolbar().items.each(function(button) {
            store.setBaseParam(button.text, button.pressed);
        });
        store.setBaseParam("limit", 20000);
    },
    toggleProtocol: function() {
        this.store.reload();
    },
    onRender: function(c) {
        Pad.GridPanel.Mirror.superclass.onRender.call(this, c);
        Util.getLocation(this.getStore().load.createDelegate(this.getStore()));
        this.getBottomToolbar().hide();
    },
});

Ext.reg('padgridpanelmirror', Pad.GridPanel.Mirror);Pad.GridPanel.Release = Ext.extend(Pad.GridPanel, {
    title: 'Releases',
    iconCls: 'silk-page',
    api: { read: Release.search },
    autoExpandColumn: 'abstract',
    cm: [
    {
        header: "Release",
        width: 220,
        sortable: true,
        dataIndex: 'name'
    },
    {
        header: "Abstract",
        sortable: true,
        dataIndex: 'abstract',
        id: 'abstract'
    },
    {
        header: "Distribution",
        hidden: true,
        dataIndex: 'distribution',
    },
    {
        header: "",
        width: 70,
        sortable: true,
        dataIndex: 'none',
        align: 'center',
        renderer: function(value, s,r) { return '<a href="' + r.data.download_url + '">Download</a>' }
    },
    {
        header: "Date",
        hidden: true,
        dataIndex: 'day',
        renderer: Ext.util.Format.dateRenderer("l, jS F Y")
    },
    {
        header: "Released",
        width: 120,
        sortable: true,
        dataIndex: 'date',
        renderer: Util.dateTimeRenderer
    },
    ],
    fields: ['day', 'name', 'abstract', 'date', 'distribution', 'download_url'],
    initEvents: function() {
        this.on('rowdblclick', this.onRowDblClick, this);
        Pad.GridPanel.Release.superclass.initEvents.call(this, arguments);
    },
    onRowDblClick: function(grid, index, e) {
        var row = this.getStore().getAt(index);
        var module = row.get('distribution').replace(/-/g, '::');
        Pad.UI.TabPanel.add(new Pad.Reader.Pod({ title: module }));
    },
});

Ext.reg('padgridpanelrelease', Pad.GridPanel.Release);Pad.Panel = Ext.extend(Ext.Panel, {
    closable: true,
    identifier: ['title'],
    xtype: 'padpanel',
    setToken: function() {
        Ext.History.add(["", this.title.toLowerCase()].join("/"));
    }
});Pad.Author = Ext.extend(Pad.Panel, {
    iconCls: 'silk-user',
    layout: 'border',
    identifier: ['title'],
    xtype: 'padauthor',
    controller: 'author',
    overview: {
        region: 'north',
        xtype: 'panel',
        height: 200,
        html: "Deine Mudder",
        border: false,
        tbar: [{ text: 'Foo' }]
    },
    grid: {
        region: 'center',
        border: false,
        xtype: 'padgridpanelrelease',
        api: { read: Release.byAuthor },
    },
    initComponent: function() {
        var grid = Ext.ComponentMgr.create(this.grid);
        this.items = [Ext.ComponentMgr.create(this.overview), grid],
        grid.store.setBaseParam('author', this.title);
        Pad.Author.superclass.initComponent.call(this, arguments);
    },
    setToken: function() {
        Ext.History.add(["", this.controller, this.title].join("/"));
    }
});Pad.Mirrors = Ext.extend(Pad.Panel, {
    iconCls: 'silk-server',
    layout: 'border',
    title: 'Mirrors',
    map: {
        xtype: 'gmappanel',
        region: 'south',
        split: true,
        zoomLevel: 1,
        height: 300,
        gmapType: 'map',
        mapConfOpts: ['enableScrollWheelZoom', 'enableDoubleClickZoom', 'enableDragging'],
        mapControls: ['GSmallMapControl', 'GMapTypeControl', 'NonExistantControl'],
        setCenter: {
            lat: 0,
            lng: 0
        }
    },
    grid: {
        region: 'center',
        border: false,
        title: null,
        xtype: 'padgridpanelmirror',
        api: {
            read: Mirror.byLocation
        },
    },
    initComponent: function() {
        this.grid = Ext.ComponentMgr.create(this.grid);
        this.grid.store.on('load', this.setMarkers, this);
        this.grid.on('rowdblclick', this.centerMap, this);
        this.map = Ext.ComponentMgr.create(this.map);
        this.items = [this.map, this.grid],
        Pad.Author.superclass.initComponent.call(this, arguments);
    },
    
    centerMap: function(grid, index, e) {
        var row = grid.getStore().getAt(index);
        var loc = row.data.location.split(/,/);
        var point = new GLatLng(loc[0], loc[1])
        this.map.getMap().setCenter(point, 8);
    },
    setMarkers: function(store, records) {
        var me = Util.location;
        var mePoint = new GLatLng(me.coords.latitude, me.coords.longitude);
        var blueIcon = new GIcon(G_DEFAULT_ICON);
        blueIcon.image = "http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png";
        this.map.zoomLevel = 5;
        this.map.addMarker(mePoint, {
            icon: blueIcon
        }, true, true);
        for (var i = 0; i < records.length; i++) {
            var data = records[i].data;
            var loc = data.location.split(/,/);
            var point = new GLatLng(loc[0], loc[1])
            this.map.addMarker(point);
        }

    },
});Pad.Recent = Ext.extend(Pad.Panel, {
    title: 'Recent',
    layout: 'border',
    iconCls:'silk-new',
    grid: {
        region: 'center',
        border: false,
        xtype: 'padgridpanelrelease',
        title: null,
        api: { read: Release.recent },
        sortInfo: { field: 'date', direction: 'DESC' },
        groupField: 'day',
    },
    initComponent: function() {
        var grid = Ext.ComponentMgr.create(this.grid);
        this.items = [grid],
        Pad.Recent.superclass.initComponent.call(this, arguments);
    }
});Pad.Portlet = Ext.extend(Ext.Panel, {});Pad.Portlet.DataView = Ext.extend(Ext.Panel, {
    references: 0,
    autoScroll: true,
    view: {
        singleSelect: true,
        overClass: 'pad-related-item-selected',
        itemSelector: '.pad-related-item',
        emptyText: '',
        deferEmptyText: false,
        autoScroll: true,
        tpl: '<tpl for="."><div class="pad-related-item"><tpl if="module">{module}</tpl><tpl if="!module">{path}</tpl> <tpl if="version &gt; 0">{version}</tpl></div></tpl>',
    },
    store: {
        root: 'data',
        fields: ['module', 'version', 'name', 'path', 'id', 'release', 'author'],
    },
    initComponent: function() {
        Pad.Portlet.DataView.superclass.initComponent.call(this, arguments);
        this.store = new Ext.data.JsonStore(Ext.applyIf({
            fields: this.fields,
            proxy: new Pad.DataProxy({
                api: {
                    read: this.api
                }
            })
        },
        this.store));
        this.view = new Ext.DataView(Ext.applyIf({
            tpl: this.tpl
        },
        this.view));
        this.view.on('click', this.onClick);
        this.relayEvents(this.store.proxy, ['load', 'beforeload', 'exception']);
    },
    afterRender: function() {
        Pad.Portlet.DataView.superclass.afterRender.call(this, arguments);
        this.view.render(this.body);
        this.view.bindStore(this.store);
        this.store.load({
            params: {
                author: this.author,
                release: this.release
            }
        });
    },
    onException: function(res) {
        this.destroy();
    },
    onClick: function(view, index, dom, e) {
        var module = view.getSelectedRecords()[0].data;
        if (e.shiftKey) {
            pod = new Pad.Reader.Source.Code({
                title: module.module || module.name,
                file_id: module.id,
                release: module.release,
                author: module.author,
                path: module.path,
            });
        } else {
            pod = new Pad.Reader.Pod({
                title: module.module || module.name,
                file_id: module.id,
                release: module.release,
                author: module.author,
                path: module.path,
            });
        }
        console.log(pod);
        Pad.UI.TabPanel.add(pod);
    }
});

Ext.reg('padportletdataview', Pad.Portlet.DataView);Pad.Portlet.ServerPortlet = Ext.extend(Ext.Panel, {
    cls: 'x-portlet',
    height: 80,
    title: 'Select Server',
    iconCls: 'silk-wrench',
    frame: true,
    initComponent: function() {
        this.items = [{
            xtype: 'combo',
            lazyRender: true,
            triggerAction: 'all',   
            mode: 'local',
            value: API.url,
            store: new Ext.data.ArrayStore({
                id: 0,
                fields: ['value'],
                data: [
                    ['http://api.netcubed.de'],
                    ['http://api2.metacpan.org'],
                    ['http://localhost:5000']]
            }),
            displayField: 'value',
            listeners: {
                change: this.onChange,
                select: this.onChange
            }
        }];
        Pad.Portlet.ServerPortlet.superclass.initComponent.call(this, arguments);
    },
    onChange: function(combo) {
        API.url = combo.getValue();
        console.log(API.url);
    }
});Ext.ns('Pad.Reader');

Pad.Reader = Ext.extend(Pad.Panel, {
    title: 'Pad.Reader',
    xtype: 'padreader',
    loaded: false,
    identifier: ['author','release','path'],
    scrollCache: {
        top: 0,
        left: 0
    },
    initComponent: function() {
        if(this.path) this.title = this.path;
        Pad.Reader.superclass.initComponent.call(this, arguments);
        this.initEvents();
    },
    initEvents: function() {
        this.addEvents('load');
    },
    afterRender: function() {
        Pad.Reader.superclass.afterRender.call(this, arguments);
        this.ownerCt.on('beforetabchange', this.onDeactivate, this);
        this.on('activate', this.onActivate, this);

    },
    setToken: function() {
        if(!this.loaded) return this.on('load', this.setToken, this);
        Ext.History.add(
            "/" + [this.controller, this.author, this.release, this.path].join("/")
        );
    },
    onDeactivate: function(tab, newtab, oldtab) {
        if (!oldtab || oldtab != this) return;
        this.scrollCache = this.body.getScroll();
    },
    onActivate: function(tab, newtab, oldtab) {
        this.body.scrollTo('top', this.scrollCache.top);
    },
    onRender: function(tab) {
        Pad.Reader.superclass.onRender.call(this, tab);
        this.oldIconCls = this.iconCls;
        this.setIconClass('silk-loading');
    },
    onLoad: function(res) {
        this.setIconClass(this.oldIconCls);
        if(res) {
            Ext.copyTo(this, res, ['path', 'release', 'author', 'module']);
            Ext.fly(this.ownerCt.getTabEl(this)).child('span.x-tab-strip-text', true).qtip = [this.author, this.release, this.path].join("/");
            this.setTitle(this.module || this.path);
        } else {
            this.path = this.title;
            this.body.update('Not Found');
        }
        this.loaded = true;
        this.fireEvent('load');
    }

});Ext.ns('Pad.Reader.Pod');

Pad.Reader.Pod = Ext.extend(Pad.Reader, {
    title: 'Pad.Reader',
    autoScroll: true,
    controller: 'pod',
    iconCls: 'silk-package',
    padding: '5px 5px 5px 25px',
    xtype: 'padreaderpod',
    closable: true,
    tbar: [{
        iconCls: 'silk-star',
        enableToggle: true,
        tooltip: 'Add to favorites'
    },
    '->', {
        iconCls: 'silk-page-white-code',
        text: 'Source Code',
        handler: function() {
            var pod = new Pad.Reader.Source.Code({
                title: this.ownerCt.ownerCt.title,
                release: this.ownerCt.ownerCt.release,
                author: this.ownerCt.ownerCt.author,
                path: this.ownerCt.ownerCt.path,
                
            });
            Pad.UI.TabPanel.add(pod);
        }
    },
    {
        iconCls: 'silk-bug',
        text: 'Report Bug'
    },
    {
        iconCls: 'silk-award-gold',
        text: 'Rate Distribution'
    },
    {
        iconCls: 'silk-wrench',
        text: 'Tools',
        menu: [{
            text: 'Diff Releases'
        },
        {
            text: 'Grep Release'
        }]
    },
    {
        iconCls: 'silk-printer',
        tooltip: 'Print document'
    }],
    initComponent: function() {
        Pad.Reader.Pod.superclass.initComponent.call(this, arguments);
        Ext.apply(this, {
            toc: new Pad.Reader.TOC.Pod({})
        });

    },
    onRender: function(tab) {
        Pad.Reader.Pod.superclass.onRender.call(this, tab);
        var that = this;
        Module.pod({ file_id: this.file_id, author: this.author, release: this.release, path: this.path, name: this.name || this.title }, this.onLoad.createDelegate(this));
        this.toc.body = this.body;
    },
    onLoad: function(res) {
        Pad.Reader.Pod.superclass.onLoad.call(this, res);
        if(!res) return;
        res.html = res.html.replace(/<pre>/g, '<pre class="brush: pl; class-name: \'highlight\'; toolbar: false;">');
        res.html = this.fixModuleLinks(res.html);
        this.body.insertHtml('afterBegin', '<div class="pod">' + res.html + '</div>');
        SyntaxHighlighter.highlight();
        this.toc.parseTOC(Ext.select('ul[id="index"]', false, this.body.dom).elements[0]);
        var that = this;
        this.toc.tree.on('click', function(node) {
            that.scrollToSection(node.id);
        });
    },
    fixModuleLinks: function(html) {
        html = html.replace(/ class="moduleLink"/g, ' onclick="Pad.UI.TabPanel.add(new Pad.Reader.Pod({title: this.getAttribute(\'href\')})); return false;"');
        return html;
    },
    afterRender: function(tab, foo) {
        Pad.Reader.Pod.superclass.afterRender.call(this, tab);

        this.toc.render(this.tbar);
        this.tabEl.dd = new Ext.dd.DragSource(this.tabEl, {
            ddGroup: 'group',
            dropEl: this,
            onMouseUp: function(e) {
                if (!this.dropEl.isVisible()) {
                    this.dropEl.show();
                }
            }
        });
    },
    scrollToSection: function(section) {
        var el = Ext.select('[id="' + section + '"]', false, this.body.dom);
        if (!el.elements[0]) return;
        var top = (Ext.fly(el.elements[0]).getOffsetsTo(this.body)[1]) + this.body.dom.scrollTop;
        this.body.scrollTo('top', top, {
            duration: .5
        });
    }
});Ext.ns('Pad.Reader.Source');

Pad.Reader.Source = Ext.extend(Pad.Reader, {
    title: 'Pad.Reader',
    xtype: 'padreadersource',
    controller: 'source',
    autoScroll: true,
    iconCls: 'silk-page-white-code',
    closable: true,
    tbar: [],
    onRender: function(tab) {
        Pad.Reader.Source.superclass.onRender.call(this, tab);
        this.load();
    },
    load: function() {
        File.source(this.author, this.release, this.path, this.onLoad.createDelegate(this));
    },
    onLoad: function(res) {
        Pad.Reader.Source.superclass.onLoad.call(this, res);
        this.body.insertHtml('afterBegin', '<pre class="brush: pl; class-name: \'highlight\'; toolbar: false;">' + Ext.util.Format.htmlEncode(res.source) + '</pre>');
        SyntaxHighlighter.highlight();
        this.podLines = res.pod_lines;
        var tb = this.getTopToolbar();
        var lines = this.body.child('.container').dom.children.length;
        tb.addText(Ext.util.Format.number(lines, '0,0') + ' lines');
        if(res.sloc)
            tb.addText(' (' + Ext.util.Format.number(res.sloc, '0,0') + ' sloc)');
        tb.addSeparator();
        tb.addText(Ext.util.Format.number(res.stat.size / 1024, '0,000.0') + ' kb');
        tb.addFill();
        tb.add({
            iconCls: 'silk-printer',
            tooltip: 'Print document'
        });
        tb.doLayout();
    }
});Ext.ns('Pad.Reader.Source.Code');

Pad.Reader.Source.Code = Ext.extend(Pad.Reader.Source, {
    title: 'Pad.Reader',
    autoScroll: true,
    iconCls: 'silk-page-white-code',
    xtype: 'padreadersourcecode',
    controller: 'code',
    closable: true,
    tbar: [{
        text: 'Strip POD',
        iconCls: 'silk-text-dropcaps',
        pressed: true,
        enableToggle: true,
        handler: function() {
            this.ownerCt.ownerCt.togglePod(this.pressed);
        }
    }],
    load: function() {
        Module.code({ author: this.author, release: this.release, path: this.path }, this.onLoad.createDelegate(this));
    },
    onLoad: function(res) {
        var tb = this.getTopToolbar();
        tb.addSeparator();
        Pad.Reader.Source.Code.superclass.onLoad.call(this, res);
        this.togglePod(true);
    },
    togglePod: function(toggle) {
        toggle = toggle ? 'none' : '';
        var lines = this.podLines;
        if (!lines) return;
        for (var i = 0; i < lines.length; i++) {
            var start = lines[i][0],
            length = lines[i][1];
            var sourceC = this.body.child('.container').dom.children;
            var linesC = this.body.child('.gutter').dom.children;
            var x;
            for (x = start; x < start + length; x++) {
                sourceC[x].style.display = toggle;
                linesC[x].style.display = toggle;
            }
    
        }
    }
});Ext.ns('Pad.Reader.TOC');

Pad.Reader.TOC.Pod = Ext.extend(Ext.Container, {
    parseTOC: function(pod) {
        this.tree.root.appendChild(this.buildTree(pod));
    },
    buildTree: function(html) {
        var toc = [];
        if(!html) return toc;
        for(var i = 0; i < html.children.length; i++) {
            var child = html.children[i];
            var item = { text: child.firstChild.innerHTML, id: child.firstChild.getAttribute('href').replace(/#/, "") };
            if(child.children.length > 1) {
                item.children = this.buildTree(child.children[1]);
            } else {
                item.leaf = true;
            }
            toc.push(item);
        }
        return toc;
    },
    afterRender: function(el) {
        el.insertHtml('afterBegin', '<div class="x-toolbar pad-toc-container"><div class="pad-toc-tree"></div>T<br>O<br>C<div class="pad-toc-tool"></div></div>');
        this.el = el.child('.pad-toc-container');
        var button = new Ext.Button({
            renderTo: el.child('.pad-toc-tool'),
            iconCls: 'silk-control-play',
            enableToggle: true,
            tooltip: 'Remain expanded'
        });

        this.tree = new Ext.tree.TreePanel({
            autoScroll: true,
            rootVisible: false,
            height: 150,
            renderTo: el.child('.pad-toc-tree'),
            root: {
                id: 'root',
                text: 'TOC',
                expanded: true,
                children: []
            }
        });
        var treeWidth = this.tree.getWidth() + 2;

        this.getEl().alignTo(this.container, 'tl-tl', [0, 27]);
        var toc = el.child('.pad-toc-container');
        var x = toc.getX() - treeWidth;
        this.el.setX(x);

        var opts = {};
        var mouseenter = function(e, tab) {
            if (opts.anim && opts.anim.isAnimated) return;
            toc.setX(x + treeWidth, opts);
        };
        var mouseleave = function(e, tab, opt) {
            if (opts.anim && opts.anim.isAnimated || button.pressed) return;
            toc.setX(x, opts);
        }

        toc.on('mouseenter', mouseenter);
        toc.on('mouseleave', mouseleave);
    }
});Ext.ns('Pad.RelatedPanel');

Pad.RelatedPanel = Ext.extend(Pad.CardPortlet, {
    iconCls: 'silk-package-link',
    title: 'Related Modules',
    identifier: 'release'
});

Pad.RelatedPanel.Accordion = Ext.extend(Ext.Panel, {
    layout: 'accordion',
    xtype: 'related',
    initComponent: function() {
        this.items = [{
            xtype: 'padportletdataview',
            title: 'Documentation',
            release: this.release,
            author: this.author,
            api: Release.documentation,
            
        },
        {
            xtype: 'padportletdataview',
            title: 'Dependencies',
            release: this.release,
            author: this.author,
            api: Release.dependencies

        }];
        Pad.RelatedPanel.Accordion.superclass.initComponent.call(this, arguments);
    }

});

Ext.reg('padrelated', Pad.RelatedPanel.Accordion);Ext.ns('Pad.TabPanel');

Pad.TabPanel = Ext.extend(Ext.TabPanel, {
    style:'padding:10px 0px 10px 0px',
    id: 'pad-reader',
    enableTabScroll: true,
    //bbar:[{}],
    activeItem: 0, 
    plain: true,
    add: function(c) {
        var found;
        if(this.items) this.items.each(function(item) {
            if(item.xtype != c.xtype) return;
            for(var i = 0; i < item.identifier.length; i++) {
                if(item[item.identifier[i]] != c[c.identifier[i]]) {
                    return;
                }
            }
            found = item;
            return false;
        });
        if(found) return this.activate(found);
        var comp = Pad.TabPanel.superclass.add.call(this, c);
        if(!Ext.isArray(comp)) comp.on('close', function(tab) {
            Pad.UI.FilesPanel.remove(tab);
            Pad.UI.RelatedPanel.remove(tab);
        });
        if(this.rendered) this.activate(c);
        this.loadPortlets(Ext.isArray(c) ? c[0] : c, Ext.isArray(c) ? false : true);
    },
    loadPortlets: function(c, count) {
        if(c.loaded) {
            Pad.UI.FilesPanel.add({author: c.author, release: c.release, xtype: 'padfiles' }, count);
            Pad.UI.RelatedPanel.add({author: c.author, release: c.release, xtype: 'padrelated' }, count);
        } else {
            c.on('load', this.loadPortlets.createDelegate(this, [c, count]));
        }
    },
    initEvents: function() {
        Pad.TabPanel.superclass.initEvents.call(this, arguments);
        this.on('tabchange', this.onTabChange);
        this.on('close', this.onClose);
    },
    onTabChange: function(panel, c) {
        if(c) this.loadPortlets(c);
        c.setToken();
    },
    proxyLink: function(link) {
        return false;
    }
});

new Ext.KeyMap(document, {
    key: "w",
    ctrl: true,
    alt: true,
    fn: function() {
        var tab = Ext.getCmp('pad-reader').getActiveTab();
        Ext.getCmp('pad-reader').remove(tab, true);
    },
});Pad.Viewport = Ext.extend(Ext.Viewport, {
    layout:'border',
    frame: false,
    defaults: { bodyStyle: 'background-color: #e8f0Fe;', bodyCssClass: 'pad-no-scroll-x', border: false, autoScroll: false },
    
    initComponent: function() {
        this.FilesPanel = new Pad.FilesPanel({items: [] });
        this.RelatedPanel = new Pad.RelatedPanel();
        this.TabPanel = new Pad.TabPanel();
        this.ServerPortlet = new Pad.Portlet.ServerPortlet();
        var tools = [];
        this.items = [{
                region: 'center',
                style: 'padding-left: 10px',
                layout: 'fit',
                border:false,
                items: [ this.TabPanel ]
            },{
            xtype:'portal',
            region:'east',
            width: 250,
            items:[{
                width:250,
                style:'padding:10px',
                items:[ 
                this.FilesPanel,
                this.RelatedPanel,
                this.ServerPortlet
                 ]
            }]

            /*
             * Uncomment this block to test handling of the drop event. You could use this
             * to save portlet position state for example. The event arg e is the custom 
             * event defined in Ext.ux.Portal.DropZone.
             */
    //            ,listeners: {
    //                'drop': function(e){
    //                    Ext.Msg.alert('Portlet Dropped', e.panel.title + '<br />Column: ' + 
    //                        e.columnIndex + '<br />Position: ' + e.position);
    //                }
    //            }
        }];
        
        Pad.Viewport.superclass.initComponent.call(this, arguments);
    },
});/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
/**
 * @class Ext.ux.GMapPanel
 * @extends Ext.Panel
 * @author Shea Frederick
 */
Ext.ux.GMapPanel = Ext.extend(Ext.Panel, {
    initComponent : function(){
        
        var defConfig = {
            plain: true,
            zoomLevel: 3,
            yaw: 180,
            pitch: 0,
            zoom: 0,
            gmapType: 'map',
            border: false
        };
        
        Ext.applyIf(this,defConfig);
        
        Ext.ux.GMapPanel.superclass.initComponent.call(this);        

    },
    afterRender : function(){
        
        var wh = this.ownerCt.getSize();
        Ext.applyIf(this, wh);
        
        Ext.ux.GMapPanel.superclass.afterRender.call(this);    
        
        if (this.gmapType === 'map'){
            this.gmap = new GMap2(this.body.dom);
        }
        
        if (this.gmapType === 'panorama'){
            this.gmap = new GStreetviewPanorama(this.body.dom);
        }
        
        if (typeof this.addControl == 'object' && this.gmapType === 'map') {
            this.gmap.addControl(this.addControl);
        }
        
        if (typeof this.setCenter === 'object') {
            if (typeof this.setCenter.geoCodeAddr === 'string'){
                this.geoCodeLookup(this.setCenter.geoCodeAddr);
            }else{
                if (this.gmapType === 'map'){
                    var point = new GLatLng(this.setCenter.lat,this.setCenter.lng);
                    this.gmap.setCenter(point, this.zoomLevel);    
                }
                if (typeof this.setCenter.marker === 'object' && typeof point === 'object'){
                    this.addMarker(point,this.setCenter.marker,this.setCenter.marker.clear);
                }
            }
            if (this.gmapType === 'panorama'){
                this.gmap.setLocationAndPOV(new GLatLng(this.setCenter.lat,this.setCenter.lng), {yaw: this.yaw, pitch: this.pitch, zoom: this.zoom});
            }
        }

        GEvent.bind(this.gmap, 'load', this, function(){
            this.onMapReady();
        });

    },
    onMapReady : function(){
        this.addMarkers(this.markers);
        this.addMapControls();
        this.addOptions();  
    },
    onResize : function(w, h){

        if (typeof this.getMap() == 'object') {
            this.gmap.checkResize();
        }
        
        Ext.ux.GMapPanel.superclass.onResize.call(this, w, h);

    },
    setSize : function(width, height, animate){
        
        if (typeof this.getMap() == 'object') {
            this.gmap.checkResize();
        }
        
        Ext.ux.GMapPanel.superclass.setSize.call(this, width, height, animate);
        
    },
    getMap : function(){
        
        return this.gmap;
        
    },
    getCenter : function(){
        
        return this.getMap().getCenter();
        
    },
    getCenterLatLng : function(){
        
        var ll = this.getCenter();
        return {lat: ll.lat(), lng: ll.lng()};
        
    },
    addMarkers : function(markers) {
        
        if (Ext.isArray(markers)){
            for (var i = 0; i < markers.length; i++) {
                var mkr_point = new GLatLng(markers[i].lat,markers[i].lng);
                this.addMarker(mkr_point,markers[i].marker,false,markers[i].setCenter, markers[i].listeners);
            }
        }
        
    },
    addMarker : function(point, marker, clear, center, listeners){
        
        Ext.applyIf(marker,G_DEFAULT_ICON);

        if (clear === true){
            this.getMap().clearOverlays();
        }
        if (center === true) {
            this.getMap().setCenter(point, this.zoomLevel);
        }

        var mark = new GMarker(point,marker);
        if (typeof listeners === 'object'){
            for (evt in listeners) {
                GEvent.bind(mark, evt, this, listeners[evt]);
            }
        }
        this.getMap().addOverlay(mark);

    },
    addMapControls : function(){
        
        if (this.gmapType === 'map') {
            if (Ext.isArray(this.mapControls)) {
                for(i=0;i<this.mapControls.length;i++){
                    this.addMapControl(this.mapControls[i]);
                }
            }else if(typeof this.mapControls === 'string'){
                this.addMapControl(this.mapControls);
            }else if(typeof this.mapControls === 'object'){
                this.getMap().addControl(this.mapControls);
            }
        }
        
    },
    addMapControl : function(mc){
        
        var mcf = window[mc];
        if (typeof mcf === 'function') {
            this.getMap().addControl(new mcf());
        }    
        
    },
    addOptions : function(){
        
        if (Ext.isArray(this.mapConfOpts)) {
            var mc;
            for(i=0;i<this.mapConfOpts.length;i++){
                this.addOption(this.mapConfOpts[i]);
            }
        }else if(typeof this.mapConfOpts === 'string'){
            this.addOption(this.mapConfOpts);
        }        
        
    },
    addOption : function(mc){
        
        var mcf = this.getMap()[mc];
        if (typeof mcf === 'function') {
            this.getMap()[mc]();
        }    
        
    },
    geoCodeLookup : function(addr) {
        
        this.geocoder = new GClientGeocoder();
        this.geocoder.getLocations(addr, this.addAddressToMap.createDelegate(this));
        
    },
    addAddressToMap : function(response) {
        
        if (!response || response.Status.code != 200) {
            Ext.MessageBox.alert('Error', 'Code '+response.Status.code+' Error Returned');
        }else{
            place = response.Placemark[0];
            addressinfo = place.AddressDetails;
            accuracy = addressinfo.Accuracy;
            if (accuracy === 0) {
                Ext.MessageBox.alert('Unable to Locate Address', 'Unable to Locate the Address you provided');
            }else{
                if (accuracy < 7) {
                    Ext.MessageBox.alert('Address Accuracy', 'The address provided has a low accuracy.<br><br>Level '+accuracy+' Accuracy (8 = Exact Match, 1 = Vague Match)');
                }else{
                    point = new GLatLng(place.Point.coordinates[1], place.Point.coordinates[0]);
                    if (typeof this.setCenter.marker === 'object' && typeof point === 'object'){
                        this.addMarker(point,this.setCenter.marker,this.setCenter.marker.clear,true, this.setCenter.listeners);
                    }
                }
            }
        }
        
    }
 
});

Ext.reg('gmappanel', Ext.ux.GMapPanel);/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ux.PanelResizer = Ext.extend(Ext.util.Observable, {
    minHeight: 0,
    maxHeight:10000000,

    constructor: function(config){
        Ext.apply(this, config);
        this.events = {};
        Ext.ux.PanelResizer.superclass.constructor.call(this, config);
    },

    init : function(p){
        this.panel = p;

        if(this.panel.elements.indexOf('footer')==-1){
            p.elements += ',footer';
        }
        p.on('render', this.onRender, this);
    },

    onRender : function(p){
        this.handle = p.footer.createChild({cls:'x-panel-resize'});

        this.tracker = new Ext.dd.DragTracker({
            onStart: this.onDragStart.createDelegate(this),
            onDrag: this.onDrag.createDelegate(this),
            onEnd: this.onDragEnd.createDelegate(this),
            tolerance: 3,
            autoStart: 300
        });
        this.tracker.initEl(this.handle);
        p.on('beforedestroy', this.tracker.destroy, this.tracker);
    },

	// private
    onDragStart: function(e){
        this.dragging = true;
        this.startHeight = this.panel.el.getHeight();
        this.fireEvent('dragstart', this, e);
    },

	// private
    onDrag: function(e){
        this.panel.setHeight((this.startHeight-this.tracker.getOffset()[1]).constrain(this.minHeight, this.maxHeight));
        this.fireEvent('drag', this, e);
    },

	// private
    onDragEnd: function(e){
        this.dragging = false;
        this.fireEvent('dragend', this, e);
    }
});
Ext.preg('panelresizer', Ext.ux.PanelResizer);/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ux.Portal = Ext.extend(Ext.Panel, {
    layout : 'column',
    autoScroll : true,
    cls : 'x-portal',
    defaultType : 'portalcolumn',
    
    initComponent : function(){
        Ext.ux.Portal.superclass.initComponent.call(this);
        this.addEvents({
            validatedrop:true,
            beforedragover:true,
            dragover:true,
            beforedrop:true,
            drop:true
        });
    },

    initEvents : function(){
        Ext.ux.Portal.superclass.initEvents.call(this);
        this.dd = new Ext.ux.Portal.DropZone(this, this.dropConfig);
    },
    
    beforeDestroy : function() {
        if(this.dd){
            this.dd.unreg();
        }
        Ext.ux.Portal.superclass.beforeDestroy.call(this);
    }
});

Ext.reg('portal', Ext.ux.Portal);

Ext.ux.Portal.DropZone = Ext.extend(Ext.dd.DropTarget, {
    
    constructor : function(portal, cfg){
        this.portal = portal;
        Ext.dd.ScrollManager.register(portal.body);
        Ext.ux.Portal.DropZone.superclass.constructor.call(this, portal.bwrap.dom, cfg);
        portal.body.ddScrollConfig = this.ddScrollConfig;
    },
    
    ddScrollConfig : {
        vthresh: 50,
        hthresh: -1,
        animate: true,
        increment: 200
    },

    createEvent : function(dd, e, data, col, c, pos){
        return {
            portal: this.portal,
            panel: data.panel,
            columnIndex: col,
            column: c,
            position: pos,
            data: data,
            source: dd,
            rawEvent: e,
            status: this.dropAllowed
        };
    },

    notifyOver : function(dd, e, data){
        var xy = e.getXY(), portal = this.portal, px = dd.proxy;

        // case column widths
        if(!this.grid){
            this.grid = this.getGrid();
        }

        // handle case scroll where scrollbars appear during drag
        var cw = portal.body.dom.clientWidth;
        if(!this.lastCW){
            this.lastCW = cw;
        }else if(this.lastCW != cw){
            this.lastCW = cw;
            portal.doLayout();
            this.grid = this.getGrid();
        }

        // determine column
        var col = 0, xs = this.grid.columnX, cmatch = false;
        for(var len = xs.length; col < len; col++){
            if(xy[0] < (xs[col].x + xs[col].w)){
                cmatch = true;
                break;
            }
        }
        // no match, fix last index
        if(!cmatch){
            col--;
        }

        // find insert position
        var p, match = false, pos = 0,
            c = portal.items.itemAt(col),
            items = c.items.items, overSelf = false;

        for(var len = items.length; pos < len; pos++){
            p = items[pos];
            var h = p.el.getHeight();
            if(h === 0){
                overSelf = true;
            }
            else if((p.el.getY()+(h/2)) > xy[1]){
                match = true;
                break;
            }
        }

        pos = (match && p ? pos : c.items.getCount()) + (overSelf ? -1 : 0);
        var overEvent = this.createEvent(dd, e, data, col, c, pos);

        if(portal.fireEvent('validatedrop', overEvent) !== false &&
           portal.fireEvent('beforedragover', overEvent) !== false){

            // make sure proxy width is fluid
            px.getProxy().setWidth('auto');

            if(p){
                px.moveProxy(p.el.dom.parentNode, match ? p.el.dom : null);
            }else{
                px.moveProxy(c.el.dom, null);
            }

            this.lastPos = {c: c, col: col, p: overSelf || (match && p) ? pos : false};
            this.scrollPos = portal.body.getScroll();

            portal.fireEvent('dragover', overEvent);

            return overEvent.status;
        }else{
            return overEvent.status;
        }

    },

    notifyOut : function(){
        delete this.grid;
    },

    notifyDrop : function(dd, e, data){
        delete this.grid;
        if(!this.lastPos){
            return;
        }
        var c = this.lastPos.c, 
            col = this.lastPos.col, 
            pos = this.lastPos.p,
            panel = dd.panel,
            dropEvent = this.createEvent(dd, e, data, col, c,
                pos !== false ? pos : c.items.getCount());

        if(this.portal.fireEvent('validatedrop', dropEvent) !== false &&
           this.portal.fireEvent('beforedrop', dropEvent) !== false){

            dd.proxy.getProxy().remove();
            panel.el.dom.parentNode.removeChild(dd.panel.el.dom);
            
            if(pos !== false){
                c.insert(pos, panel);
            }else{
                c.add(panel);
            }
            
            c.doLayout();

            this.portal.fireEvent('drop', dropEvent);

            // scroll position is lost on drop, fix it
            var st = this.scrollPos.top;
            if(st){
                var d = this.portal.body.dom;
                setTimeout(function(){
                    d.scrollTop = st;
                }, 10);
            }

        }
        delete this.lastPos;
    },

    // internal cache of body and column coords
    getGrid : function(){
        var box = this.portal.bwrap.getBox();
        box.columnX = [];
        this.portal.items.each(function(c){
             box.columnX.push({x: c.el.getX(), w: c.el.getWidth()});
        });
        return box;
    },

    // unregister the dropzone from ScrollManager
    unreg: function() {
        Ext.dd.ScrollManager.unregister(this.portal.body);
        Ext.ux.Portal.DropZone.superclass.unreg.call(this);
    }
});
/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ux.PortalColumn = Ext.extend(Ext.Container, {
    layout : 'anchor',
    //autoEl : 'div',//already defined by Ext.Component
    defaultType : 'portlet',
    cls : 'x-portal-column'
});

Ext.reg('portalcolumn', Ext.ux.PortalColumn);
/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ux.Portlet = Ext.extend(Ext.Panel, {
    anchor : '100%',
    frame : true,
    collapsible : true,
    draggable : true,
    cls : 'x-portlet'
});

Ext.reg('portlet', Ext.ux.Portlet);
Ext.onReady(function() {
    Ext.QuickTips.init();
    Ext.History.init();

    Pad.UI = new Pad.Viewport;
    Ext.History.on('change', function(token) {
        if (token) {
            Util.loadPage(token);
        } else {
            console.log("init", token);
        }
    });
    var hash = Ext.History.getToken();
    if(!hash) return;
    hash = hash.replace(/%23/g, "#");
    var pages = hash.split(/#/);
    for (var i = 0; i < pages.length; i++) {
        Util.loadPage(pages[i]);
    }
});