# doritibi
Dori &amp; Tibi Weddig Page

## Convert github raw url to jsdelivr url

1. Get GitHub raw url like: [https://raw.githubusercontent.com/the1bit/doritibi/master/js/test.js](https://raw.githubusercontent.com/the1bit/doritibi/master/js/test.js)
2. Make a manual modification to rawgit url: Replace **raw.githubusercontent.com** to **rawgit.com**. [https://rawgit.com/the1bit/doritibi/master/js/test.js](https://rawgit.com/the1bit/doritibi/master/js/test.js)
3. Open [https://www.jsdelivr.com/rawgit](https://www.jsdelivr.com/rawgit)
4. Put link from step 2 to **RawGit** field 
5. Copy JSDelivr link to clipboard
6. Create include to your html file: ```<script src="https://cdn.jsdelivr.net/gh/the1bit/doritibi@master/js/test.js"></script>```
