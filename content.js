let scrapeInfo=document.getElementById("scrapeInfo");
let list=document.getElementById("infolList");

//Handler to receive emails from current page
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
  //getInfo
  let info=request.twitterProfileDetails;
  //alert(JSON.stringify(info));
  if(info==null||info.length==0)
  {
    let li=document.createElement("li");
    li.innerText="No Data Found";
    list.appendChild(li);
  } else{
    info.forEach((emails)=>{
      let li=document.createElement("li");
      li.innerText=JSON.stringify(info);
      list.appendChild(li);
    })
  }
});

//button click event Listener
scrapeInfo.addEventListener("click",async ()=>{
  //chrome Scrpting API
  //Get current active tab
  let [tab]=await chrome.tabs.query({active:true,currentWindow:true});

  //Execute script to parse info on page
  chrome.scripting.executeScript({
    target:{tabId:tab.id},
    func:scrapeInfoFromPage,
  });
})


function scrapeInfoFromPage(){

  var profileImage=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-1dbjc4n.r-1adg3ll.r-16l9doz.r-6gpygo.r-2o1y69.r-1v6e3re.r-bztko3.r-1xce0ei > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > a")
  var companyDomain=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div:nth-child(4) > div > a > span");
  var locationName=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div:nth-child(4) > div > span:nth-child(1) > span > span");
  var profileBio=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div > span");


  var twitterProfileDetails=[{}];

  if(profileImage==null){
  twitterProfileDetails[0]["profile_image_url"]="No Image";
  }
  else{
    twitterProfileDetails[0]["profile_image_url"]=profileImage.getAttribute("href");
  }

  twitterProfileDetails[0]["profile_name"]=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div > span:nth-child(1) > span").innerText;

  twitterProfileDetails[0]["profile_id"]=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2 > div > div > div > span").innerText;

  twitterProfileDetails[0]["following_counter"]=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-1dbjc4n.r-1mf7evn > a > span.css-901oao.css-16my406.r-1nao33i.r-poiln3.r-1b43r93.r-b88u0q.r-1cwl3u0.r-bcqeeo.r-qvutc0 > span").innerText;

  twitterProfileDetails[0]["followers_counter"]=document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(3) > div > div > div > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-1nao33i.r-poiln3.r-1b43r93.r-b88u0q.r-1cwl3u0.r-bcqeeo.r-qvutc0 > span").innerText;

  if(companyDomain==null){
    twitterProfileDetails[0]["company_domain"]="No Domain provided by the user";
  }else{
    twitterProfileDetails[0]["company_domain"]=companyDomain.innerText;
  }

  if(locationName==null){
    twitterProfileDetails[0]["location_name"]="No location is provided by the user"
  }else{
    twitterProfileDetails[0]["location_name"]=locationName.innerText
  }

  if(profileBio==null){
    twitterProfileDetails[0]["profile_bio"]="No Bio is provided by the user"
  }else{
    twitterProfileDetails[0]["profile_bio"]=profileBio.innerText;
  }

  twitterProfileDetails[0]["twitter_url"]=window.location.href;
   //send info to html page
   chrome.runtime.sendMessage({twitterProfileDetails});

  //alert(details);


}
