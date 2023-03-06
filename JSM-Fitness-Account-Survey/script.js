function addName()
{
    var usersName = document.getElementById('name').value;
    let users_name =
    {
        name:usersName,
    }
    console.log(users_name)
    localStorage.setItem("the_users_name",JSON.stringify(users_name))
}
function addAge()
{
    var usersAge = document.getElementById('age').value;

    let users_age =
    {
        age: usersAge,
    }
    console.log(users_age)
    localStorage.setItem("the_users_age",JSON.stringify(users_age))
}
function addEmail()
{
    var usersEmail = document.getElementById('email').value;
    let users_email =
    {
        email :usersEmail,
    }
    console.log(users_email)
    localStorage.setItem("the_users_email",JSON.stringify(users_email))
}
function addGender()
{
    var usersGender = document.getElementById('gender').value;
    let users_gender =
    {
        gender: usersGender,
    }
    console.log(users_gender)
    localStorage.setItem("The_users_geneder",JSON.stringify(users_gender))
}
function addInfo2()
{
    var wantVariety=document.querySelector('input[name="quest2"]:checked').value
    let questionTwoAnswers =
    {
      wants_Variety: wantVariety 
    }
    console.log(questionTwoAnswers)
  localStorage.setItem("Question_Two_Answers",JSON.stringify(questionTwoAnswers))
}
function addInfo3()
  {
    var wantIntense=document.querySelector('input[name="quest3"]:checked').value
    let questionThreeAnswers =
    {
      wants_Intense: wantIntense 
    }
    console.log(questionThreeAnswers)
    localStorage.setItem("Question_Three_Answers",JSON.stringify(questionThreeAnswers))
  }
function addInfo4()
  {
    var wantConvenient=document.querySelector('input[name="quest4"]:checked').value
    let questionFourAnswers =
    {
      wants_Convenient: wantConvenient
    }
    console.log(questionFourAnswers)
    localStorage.setItem("Question_Four_Answers",JSON.stringify(questionFourAnswers))
  }
function addInfo5()
{
    var goals = document.getElementById('role').value;
    let questionFiveAnswers =
    {
      users_goals: goals 
    }
    console.log(questionFiveAnswers)
    localStorage.setItem("Question_Five_Answers",JSON.stringify(questionFiveAnswers))
}
function addInfo6()
  {
    var schedule=document.querySelector('input[name="quest6"]:checked').value
    let questionSixAnswers =
    {
      user_schedule: schedule 
    }
    console.log(questionSixAnswers)
    localStorage.setItem("Question_Six_Answers",JSON.stringify(questionSixAnswers))
  }

function addInfo8()
{
    var time=document.querySelector('input[name="recommed"]:checked').value
    let questionEightAnswers =
    {
      Time_Of_Day: time 
    }
    console.log(questionEightAnswers)
    localStorage.setItem("Question_Eight_Answers",JSON.stringify(questionEightAnswers))
}
function addInfo9()
  {
    var length=document.querySelector('input[name="recommed"]:checked').value
    let questionNineAnswers =
    {
      workout_length: length 
    }
    console.log(questionNineAnswers)
    localStorage.setItem("Question_Nine_Answers",JSON.stringify(questionNineAnswers))
  }
function addInfo10()
  {
    var warmup=document.querySelector('input[name="recommed"]:checked').value
    let questionTenAnswers =
    {
      wants_warmup: warmup 
    }
    console.log(questionTenAnswers)
    localStorage.setItem("Question_Ten_Answers",JSON.stringify(questionTenAnswers))
  }
function addInfo11()
  {
    var coolDown=document.querySelector('input[name="recommed"]:checked').value
    let questionElevenAnswers =
    {
      wants_coolDown: coolDown 
    }
    console.log(questionElevenAnswers)
    localStorage.setItem("Question_Eleven_Answers",JSON.stringify(questionElevenAnswers))
  }
function addInfo12()
  {
    var workoutEquiptment=document.querySelector('input[name="recommed"]:checked').value
    let questionTwelveAnswers =
    {
      has_equiptment: workoutEquiptment 
    }
    console.log(questionTwelveAnswers)
    localStorage.setItem("Question_Twelve_Answers",JSON.stringify(questionTwelveAnswers))
  }
function addInfo13()
  {
    var homeWorkout=document.querySelector('input[name="recommed"]:checked').value
    let questionThirteenAnswers =
    {
      workout_home: homeWorkout 
    }
    console.log(questionThirteenAnswers)
  
     localStorage.setItem("Question_Thirteen_Answers",JSON.stringify(questionThirteenAnswers))
  }
function addInfo14()
  {
    var exercise_how=document.querySelector('input[name="recommed"]:checked').value
    let questionFourteenAnswers =
    {
      Likes_To_Exercise: exercise_how 
    }
    console.log(questionFourteenAnswers)
    localStorage.setItem("Question_Fourteen_Answers",JSON.stringify(questionFourteenAnswers))
  }
function addInfo15()
  {
     var upper=document.getElementById('upper').checked?document.getElementById('upper').value:'';
     var lower=document.getElementById('lower').checked?document.getElementById('lower').value:''; 
     var full=document.getElementById('full').checked?document.getElementById('full').value:'';
     var mid=document.getElementById('mid').checked?document.getElementById('mid').value:'';
     var cardio=document.getElementById('cardio').checked?document.getElementById('cardio').value:''
    
     let questionFifteenAnswers=
     {
        upper:upper,
        lower:lower,
        full:full,
        mid:mid,
        cardio:cardio
      }
        console.log(questionFifteenAnswers)
        localStorage.setItem("Question_Fifteen_Answers",JSON.stringify(questionFifteenAnswers))
    
  }
function addInfo16()
  {
     var Weight_Lifting=document.getElementById('WeightLifting').checked?document.getElementById('WeightLifting').value:'';
     var Walk=document.getElementById('Walk').checked?document.getElementById('Walk').value:''; 
     var Run=document.getElementById('Run').checked?document.getElementById('Run').value:'';
     var Hike=document.getElementById('Hike').checked?document.getElementById('Hike').value:'';
     var Swim=document.getElementById('Swim').checked?document.getElementById('Swim').value:'';
     var Dance=document.getElementById('Dance').checked?document.getElementById('Dance').value:'';
     var Aerobics=document.getElementById('Aerobics').checked?document.getElementById('Aerobics').value:'';
     var Pilates=document.getElementById('Pilates').checked?document.getElementById('Pilates').value:'';
     var Yoga=document.getElementById('Yoga').checked?document.getElementById('Yoga').value:'';
     var Team_Sport=document.getElementById('TeamSport').checked?document.getElementById('TeamSport').value:'';
     var Other=document.getElementById('Other').checked?document.getElementById('Other').value:''

     let questionSixteenAnswers=
     {
        Weight_Lifting:Weight_Lifting,
        Walk:Walk,
        Run:Run,
        Hike:Hike,
        Swim:Swim,
        Dance:Dance,
        Aerobics:Aerobics,
        Pilates:Pilates,
        Yoga:Yoga,
        Team_Sport:Team_Sport,
        Other: Other
      }
        console.log(questionSixteenAnswers)
        localStorage.setItem("Question_Sixteen_Answers",JSON.stringify(questionSixteenAnswers))
    if (Yoga=="Yoga")
    {
      return alert("heyyy");
    }
  }
function addInfo17()
  {
    var injuries=document.querySelector('input[name="recommed"]:checked').value
    let questionSeventeenAnswers =
    {
      has_injuries: injuries 
    }
    console.log(questionSeventeenAnswers)
    localStorage.setItem("Question_Seventeen_Answers",JSON.stringify(questionSeventeenAnswers))
  }
function addInfo18()
  {
    var disabilities=document.querySelector('input[name="recommed"]:checked').value
    let questionEightteenAnswers =
    {
      has_disabilities: disabilities 
    }
    console.log(questionEightteenAnswers)
    localStorage.setItem("Question_Eightteen_Answers",JSON.stringify(questionEightteenAnswers))
  }
function addInfo19()
  {
    var medConditions=document.querySelector('input[name="recommed"]:checked').value
    let questionNineteenAnswers =
    {
      has_medConditions: medConditions 
    }
    console.log(questionNineteenAnswers)
    localStorage.setItem("Question_Nineteen_Answers",JSON.stringify(questionNineteenAnswers))
  }
function addInfo20()
  {
    var comments=document.getElementById('comment').value
    let questionTwentyAnswers =
    {
      user_comments: comments
    }
    console.log(questionTwentyAnswers)
    localStorage.setItem("Question_Twenty_Answers",JSON.stringify(questionTwentyAnswers))
  }
var Workouts =
{
    "HomeWorkouts": ["Wide Grip Pushups<br><br>","Pushups<br><br>","Incline Pushups<br><br>","Diamond Pushups<br><br>","Barbell Chest Press<br><br>","Incline Barbell Chest Press<br><br>","Barbell Chest Fly<br><br>","Bear Crawls<br><br>","Squat hold<br><br>","Jump Squats<br><br>","Sumo Squats<br><br>","Lateral Lunge<br><br>","Curtsy Lunge<br><br>","Reverse Lunge<br><br>","Elevated Lunge<br><br>","Glute Bridges<br><br>","SingleLeg Glute Bridges<br><br>","Step Ups<br><br>","Barbell Romanian Deadlifts<br><br>","Bicycle Crunches<br><br>","V Sit Crunches<br><br>","Leg Lifts<br><br>","Crunches<br><br>","Knee Plank<br><br>","High Plank<br><br>","High Knees<br><br>","Butt Kicks<br><br>"],

    "Both" :["Wide Grip Pushups<br><br>","Pushups,Incline Pushups<br><br>","Diamond Pushups<br><br>","Barbell Chest Press<br><br>","Incline Barbell Chest Press<br><br>","Barbell Chest Fly<br><br>","Bear Crawls<br><br>","Squat hold<br><br>","Jump Squats<br><br>","Sumo Squats<br><br>","Lateral Lunge<br><br>","Curtsy Lunge<br><br>","Reverse Lunge<br><br>","Elevated Lunge<br><br>","Glute Bridges<br><br>","SingleLeg Glute Bridges<br><br>","Step Ups<br><br>","Barbell Romanian Deadlifts<br><br>","Bicycle Crunches<br><br>","V Sit Crunches<br><br>","Leg Lifts<br><br>","Crunches<br><br>","Knee Plank<br><br>","High Plank<br><br>","High Knees<br><br>","Butt Kicks<br><br>","Bicept Curls<br><br>","Bench Press<br><br>" ,"Inclined Bench Press<br><br>","Dips<br><br>","Landmine Press<br><br>","Kettlebell Press<br><br>","Bicept Curls<br><br>","Hip Thrusts<br><br>","Deadlifts<br><br>","Bulgarian Split Squat<br><br>","Good Mornings<br><br>","Romanian Deadlifts<br><br>","Kaas Bridges<br><br>"],

    "GymOnly" : ["Bicept Curls<br><br>","Bench Press<br><br>" ,"Inclined Bench Press<br><br>","Dips<br><br>","Landmine Press<br><br>","Kettlebell Press<br><br>","Bicept Curls<br><br>","Hip Thrusts<br><br>","Deadlifts<br><br>","Bulgarian Split Squat<br><br>","Good Mornings<br><br>","Romanian Deadlifts<br><br>","Kaas Bridges<br><br>"],

    "Warmups" :["Standing Calf Stretch<br><br>","Shoulder Strech<br><br>","Front Leg Swings<br><br>","Knee Hugs<br><br>","Standing Hip Rotation<br><br>","Walking lunges<br><br>","Running ten mins<br><br>","Jump Rope One Min<br><br>","Jumping Jacks<br><br>","Burpees,Walking<br><br>"],

    "CoolDown" :["Mountain Pose Tadasana<br><br>","Childs Pose Balasana<br><br>","Sukhasana<br><br>","Downward Facing Dog Mukha Svanasana<br><br>","Legs Up The Wall Viparita Karani<br><br>", "Shavasana<br><br>" , "Walk<br><br>","light jog<br><br>"]
};
function createWorkout()
{
//week 1
  var sliced = Workouts.Warmups.slice(0,5);
  document.getElementById("warmup").innerHTML = sliced;
  var sliced = Workouts.Warmups.slice(0,5);
  document.getElementById("warmup2").innerHTML = sliced;
  var sliced = Workouts.Warmups.slice(0,5);
  document.getElementById("warmup3").innerHTML = sliced;
  var sliced = Workouts.Warmups.slice(0,5);
  document.getElementById("warmup4").innerHTML = sliced;
  var sliced = Workouts.Warmups.slice(0,5);
  document.getElementById("warmup5").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmup6").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmup7").innerHTML = sliced;
var sliced = Workouts.HomeWorkouts.slice(0,5);
document.getElementById("workout").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout2").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout3").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout4").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout5").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout6").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workout7").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown2").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown3").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown4").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown5").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown6").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDown7").innerHTML = sliced;
//week 2
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp2").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp3").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp4").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp5").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp6").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmupp7").innerHTML = sliced;
var sliced = Workouts.HomeWorkouts.slice(0,5);
document.getElementById("workoutt").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt2").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt3").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt4").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt5").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt6").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workoutt7").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn2").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn3").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn4").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn5").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn6").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownn7").innerHTML = sliced;
//week 3
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp2").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp3").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp4").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp5").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp6").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("warmuppp7").innerHTML = sliced;
var sliced = Workouts.HomeWorkouts.slice(0,5);
document.getElementById("workouttt").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt2").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt3").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt4").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt5").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt6").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("workouttt7").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn2").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn3").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn4").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn5").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn6").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("coolDownnn7").innerHTML = sliced;
//week 4
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup2").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup3").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup4").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup5").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup6").innerHTML = sliced;
var sliced = Workouts.Warmups.slice(0,5);
document.getElementById("wwarmup7").innerHTML = sliced;
var sliced = Workouts.HomeWorkouts.slice(0,5);
document.getElementById("wworkout").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout2").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout3").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout4").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout5").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout6").innerHTML = sliced;
var sliced = Workouts.GymOnly.slice(0,5);
document.getElementById("wworkout7").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown2").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown3").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown4").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown5").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown6").innerHTML = sliced;
var sliced = Workouts.Yoga.slice(0,5);
document.getElementById("ccoolDown7").innerHTML = sliced;
}