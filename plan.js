async function loadData(url){
    var apiKey = "867ef954a15e48a69ed084a54ad0d6b0";
    var appendListData = "";
    var appendNutrientData = "";
    var response= await fetch(url+apiKey+"&timeFrame="+document.getElementById("timeFrame").value+"&targetCalories="+document.getElementById("targetCalories").value+"&diet="+document.getElementById("diet").value+"&exclude="+document.getElementById("exclude").value);
    var data = await response.json();

      
    for(var meal in data.meals){
         appendListData += 
         "<li> Dish : " + data.meals[meal].title +"</li>"+
         "<li> Approximate time to make : " + data.meals[meal].readyInMinutes + " minutes </li>"+
         "<li> Servings : "  + data.meals[meal].servings +"</li>"+
         "<li> Find more information : <a href='"  + data.meals[meal].sourceUrl + "'target='_blank'>"+ data.meals[meal].sourceUrl +"</a></li><br>" ;

      }
        
    appendNutrientData +=
    "<li> Calories :" + data.nutrients.calories + "</li>" +
    "<li> Carbs :" + data.nutrients.carbohydrates +  "</li>" +
    "<li>  Fat : " + data.nutrients.fat + "</li>" +
    "<li>  Protein :  " + data.nutrients.protein + "</li>";
    
    document.getElementById("targetMeal").innerHTML = appendListData;
    document.getElementById("targetNutrients").innerHTML = appendNutrientData;

}