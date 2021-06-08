////tnain@

var content = document.getElementById ('content').innerHTML;

content = content.replace (/(<a[^>]+>\s*.*\s*<\/a>)/g, "<li>$1</li> ")
content=content.replace (/(\s)+/g, ' ')
content=content.replace(/(<div\s*id=['"](\w+)['"]>)/g, '\n$1')
content=content.replace (/^<div\s*id=['"](\w+)['"]>(.*)(<\/div>) $/gim, "<$1>$2</$1>").replace (/(<header>)(.+)(<\/header>)/g, "$1<nav><ul>$2</ul></nav>$3");       
content=content.replace(/(some\stext)/g,"<p>$1</p>")
content=content.replace(/(Name:\s\w+\s\w+\s+\w+:\s\w+.\w+.\w+\s+\w+:.9{8})/g, "<adress>$1</adress>")



 document.getElementById ('content').innerHTML=content

alert(content)