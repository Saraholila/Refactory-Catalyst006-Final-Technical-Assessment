const regform = () => {
    const surname = document.regform.surname;
    const givenname = document.regform.givenname;
    const birthdate = document.regform.birthdate;
    const placeofresidence = document.regform.placeofresidence;
    const occupation = document.regform.occupation;
    const nationality = document.regform.nationality;
    const genderM = document.getElementById("genderM");
    const genderF = document.getElementById("genderF");   
    const category = document.regform.category;
    
      
    const surnameerror = document.getElementById("surnameerror");
    const givennameerror = document.getElementById("givennameerror");
    const birthdateerror = document.getElementById("birthdateerror");
    const placeofresidenceerror = document.getElementById("placeofresidenceerror");
    const occupationerror = document.getElementById("occupationerror");
    const nationalityerror = document.getElementById("nationalityerror");
    const gendererror = document.getElementById("gendererror");
    const categoryerror = document.getElementById("categoryerror");
   
  
    const surnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;   
    if (surname.value.match(surnameRegex)) {
      console.log(surname.value);
      surname.style.border = "2px solid red";
      surnameerror.innerHTML = "This Field Is Required";
      surnameerror.style.color = "Red";
      return false;
    } 

    const givennameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    if (givenname.value.match(givennameRegex)) {
      console.log(givenname.value);
    //   username.style.border = "2px solid green";
      givenname.style.border = "2px solid red";
      givennameerror.innerHTML = "This Field Is Required";
      givennameerror.style.color = "Red";
      return false;
    }
    
    let birthdateRegex = /^[0-9]+$/;
    if (birthdate.value.match(birthdateRegex)) {
      console.log(birthdate.value);
      birthdate.style.border = "2px solid green";
    } else {
      birthdate.style.border = "2px solid red";
      birthdateerror.innerHTML = "Select Date of Birth";
      birthdateerror.style.color = "Red";
    }
  
    const residenceRegex = /^[0-9]+$/;
    if (placeofresidence.value.match(residenceRegex)) {
      console.log(placeofresidence.value);
      placeofresidence.style.border = "2px solid red";
      placeofresidenceerror.innerHTML = "This field is required";
      placeofresidenceerror.style.color = "Red";
      return false
    } 

    const occupationRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    if (occupation.value.match(occupationRegex)) {
      console.log(occupation.value);
    //   username.style.border = "2px solid green";
      occupation.style.border = "2px solid red";
      occupationerror.innerHTML = "This Field Is Required";
      occupationerror.style.color = "Red";
      return false;
    }

    const nationalityRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    if (nationality.value.match(nationalityRegex)) {
      console.log(nationality.value);
      nationality.style.border = "2px solid red";
      nationalityerror.innerHTML = "This Field Is Required";
      nationalityerror.style.color = "Red";
      return false;
    }

    if (genderM.checked == false && genderF.checked == false) {
        // alert("Please select your gender");
        // return false;
        // }else {
        gendererror.innerHTML = "Please checkout gender";
        gendererror.style.color = "red";
      }

    const categoryRegex = /^[a-zA-Z].*[\s\.]*$/;
    if (residencetype.value.match(categoryRegex)) {
      console.log(category.value);
      category.style.border = "2px solid red";
      categoryerror.innerHTML = "Select Patient Category";
      categoryerror.style.color = "Red";
    }   
  
   


    // // let regdateRegex = /^[0-9]+$/;
    // if (regdate.value=="") {
    //     console.log(regdate.value);
    //     regdate.style.border = "2px solid red";
    //     regdateerror.innerHTML = "Please select a date";
    //     regdateerror.style.color = "Red";
    //     regdate.focus() 
    //     return false;
    // }

 
    else{
        alert ("Registration was successfull!");
        return true;
    }
  };
  