
      function bsaCalc() {
        var sa = document.getElementById('bsa');
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        var result = Math.sqrt(((weight * height))/3600);
        sa.style.display = "block";
        sa.innerHTML = ("The BSA is" + " " + Math.round(result*100)/100); 
      }
      /*function ageCount() {
       var ag = document.getElementById("birth");
       var now = new Date();                            
       var currentY = now.getFullYear();                
       var currentM = now.getMonth();                   

       var dobget =document.getElementById("birthday").value; 
       var dob = new Date(dobget);                             
       var prevY= dob.getFullYear();
       var prevM = dob.getMonth();                                    
       if (currentM >= prevM){
        var ageM = currentM - prevM;
        var ageY =currentY - prevY;
        ag.style.display = "block";         
       ag.innerHTML = ("The patient's age is" + " " + ageY +' Years ' + ageM +' Months ');
       } else {
        var ageM = 12 + currentM - prevM;
        var ageY = currentY - prevY - 1;
        ag.style.display = "block";         
       ag.innerHTML = ("The patient's age is" + " " + ageY +' Years ' + ageM +' Months ');
       }
      }*/
      /*Pneumonia(id=Pneu) functions*/
      function syrup() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 40;
        maxDosage = weight * 45;
        var secondP = document.getElementById('mindose');
        var thirdP = document.getElementById('maxdose');
        if (maxDosage < 1000) {
          thirdP.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          thirdP.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          secondP.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          secondP.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ceruInj() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 30;
        var minInj = document.getElementById('ceru1');
        var maxInj = document.getElementById('ceru2');
        if (maxDosage < 750) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 750) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ceruSyr() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('syr1'); 
        var maxInj = document.getElementById('syr2');
        if (maxDosage < 250) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 250) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function coaInj() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 30;
        var minInj = document.getElementById('coax1');
        var maxInj = document.getElementById('coax2');
        if (maxDosage < 1200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function coaTab() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 40;
        maxDosage = weight * 45;
        var minInj = document.getElementById('tab1');
        var maxInj = document.getElementById('tab2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function crystal() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25000;
        maxDosage = weight * 50000;
        var minInj = document.getElementById('crys0');
        var maxInj = document.getElementById('crys1');
        if (maxDosage < 2e6) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "IU";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2e6) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "IU";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function staphy() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 50;
        var minInj = document.getElementById('staph1');
        var maxInj = document.getElementById('staph2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function oseltam() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 3;
        var minInj = document.getElementById('sus1');
        var maxInj = document.getElementById('sus2');
        if (maxDosage < 75) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 75) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function azithro() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 20;
        var minInj = document.getElementById('azmin');
        var maxInj = document.getElementById('azmax');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function erythro() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 50;
        var minInj = document.getElementById('ermin');
        var maxInj = document.getElementById('ermax');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function clarith() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 7.5;
        var minInj = document.getElementById('clath1');
        var maxInj = document.getElementById('clath2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function thirl() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 50;
        var minInj = document.getElementById('lir1');
        var maxInj = document.getElementById('lir2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function jecton() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = (weight * 80)/1000;
        maxDosage = (weight * 100)/1000;
        var minInj = document.getElementById('ton1');
        var maxInj = document.getElementById('ton2');
        if (maxDosage < 2) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /* Pneumonia (id=dPneu) functions*/
      /*Tonsilopharyngitis (id=dTons) functions*/
      function para() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('sat1');
        var maxInj = document.getElementById('sat2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function flAmox() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 50;
        var minInj = document.getElementById('line1');
        var maxInj = document.getElementById('line2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function cefad() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 15;
        maxDosage = weight * 15;
        var minInj = document.getElementById('drox1');
        var maxInj = document.getElementById('drox2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function peniryth() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 50;
        var minInj = document.getElementById('tyrup1');
        var maxInj = document.getElementById('tyrup2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function penizith() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 20;
        var minInj = document.getElementById('aller1');
        var maxInj = document.getElementById('aller2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function peniclath() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 7.5;
        var minInj = document.getElementById('mycin1');
        var maxInj = document.getElementById('mycin2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function secAmiclav() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 45;
        maxDosage = weight * 45;
        var minInj = document.getElementById('sectab1');
        var maxInj = document.getElementById('sectab2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function secCeru() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 15;
        maxDosage = weight * 15;
        var minInj = document.getElementById('fox1');
        var maxInj = document.getElementById('fox2');
        if (maxDosage < 250) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 250) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function secAzith() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 20;
        var minInj = document.getElementById('let1');
        var maxInj = document.getElementById('let2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ceftTh() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 80;
        var minInj = document.getElementById('cef1');
        var maxInj = document.getElementById('cef2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        /*function povid() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 80;
        var minInj = document.getElementById('povid1');
        var maxInj = document.getElementById('povid2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }*/
      }
      /*Tonsilopharyngitis (id=dTons) functions*/
      /*Acute Otitis Media (id=dAcu) functions*/
      function amoxiCap() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 40;
        maxDosage = weight * 45;
        var minInj = document.getElementById('med1');
        var maxInj = document.getElementById('med2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function erythAllerg() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 50;
        var minInj = document.getElementById('syt1');
        var maxInj = document.getElementById('syt2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function azithAllerg() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 20;
        var minInj = document.getElementById('zith1');
        var maxInj = document.getElementById('zith2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function clathAllerg() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 7.5;
        var minInj = document.getElementById('rith1');
        var maxInj = document.getElementById('rith2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function coaxLine() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 40;
        maxDosage = weight * 45;
        var minInj = document.getElementById('clav1');
        var maxInj = document.getElementById('clav2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ceruLine() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 15;
        maxDosage = weight * 15;
        var minInj = document.getElementById('xime1');
        var maxInj = document.getElementById('xime2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function altCef() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 4;
        maxDosage = weight * 4;
        var minInj = document.getElementById('alt1');
        var maxInj = document.getElementById('alt2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function altPod() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 5;
        maxDosage = weight * 5;
        var minInj = document.getElementById('nat1');
        var maxInj = document.getElementById('nat2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function parFev() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('mol1');
        var maxInj = document.getElementById('mol2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ibFev() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 4;
        maxDosage = weight * 10;
        var minInj = document.getElementById('prof1');
        var maxInj = document.getElementById('prof2');
        if (maxDosage < 400) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 400) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Acute otitis Media (id=dAcu) functions*/
      /*Allergic Rhintis (id=dRhin) functions*/
      function lora() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.06;
        maxDosage = weight * 0.2;
        var minInj = document.getElementById('tad1');
        var maxInj = document.getElementById('tad2');
        if (maxDosage < 16) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 16) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function deslo() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.07;
        maxDosage = weight * 0.42;
        var minInj = document.getElementById('hist1');
        var maxInj = document.getElementById('hist2');
        if (maxDosage < 5) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 5) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function cetriz() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.25;
        var minInj = document.getElementById('mine1');
        var maxInj = document.getElementById('mine2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }

      function bastin() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.15;
        maxDosage = weight * 0.28;
        var minInj = document.getElementById('bastin1');
        var maxInj = document.getElementById('bastin2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Allergic Rhintis (id=dRhin) functions*/
      /*Acute Bacterial Sinusitis (id=dBAc) functions*/
      function acute() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 80;
        maxDosage = weight * 90;
        var minInj = document.getElementById('acu1');
        var maxInj = document.getElementById('acu2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function bact() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = (weight * 80)/1000;
        maxDosage = (weight * 90)/1000;
        var minInj = document.getElementById('syp1');
        var maxInj = document.getElementById('syp2');
        if (maxDosage < 2) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function sinu() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 5;
        maxDosage = weight * 5;
        var minInj = document.getElementById('act1');
        var maxInj = document.getElementById('act2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ceta() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('cet1');
        var maxInj = document.getElementById('cet2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function pain() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 4;
        maxDosage = weight * 10;
        var minInj = document.getElementById('ref1');
        var maxInj = document.getElementById('ref2');
        if (maxDosage < 400) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 400) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Acute Bacterial Sinusitis (id=dBAc) functions*/
      /*Aspiration Pneumonia (id=dAsp) functions*/
      function pneu() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25000;
        maxDosage = weight * 150000;
        var minInj = document.getElementById('pn1');
        var maxInj = document.getElementById('pn2');
        if (maxDosage < 2e6) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "IU";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2e6) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "IU";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function gent() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 5;
        maxDosage = weight * 7;
        var minInj = document.getElementById('gn1');
        var maxInj = document.getElementById('gn2');
        if (maxDosage < 240) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 240) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function metro() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 7.5;
        var minInj = document.getElementById('rot1');
        var maxInj = document.getElementById('rot2');
        if (maxDosage < 400) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 400) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function firstC() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 30;
        var minInj = document.getElementById('c1');
        var maxInj = document.getElementById('c2');
        if (maxDosage < 1200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function erythPA() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 50;
        var minInj = document.getElementById('pa1');
        var maxInj = document.getElementById('pa2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function clathPA() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 7.5;
        var minInj = document.getElementById('ap1');
        var maxInj = document.getElementById('ap2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function secClind() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 37.5;
        maxDosage = weight * 100;
        var minInj = document.getElementById('sec1');
        var maxInj = document.getElementById('sec2');
        if (maxDosage < 1200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function coaSec() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 90;
        maxDosage = weight * 90;
        var minInj = document.getElementById('as1');
        var maxInj = document.getElementById('as2');
        if (maxDosage < 1200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function cefSec() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 60;
        var minInj = document.getElementById('fec1');
        var maxInj = document.getElementById('fec2');
        if (maxDosage < 750) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 750) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Aspiration Pneumonia (id=dAsp) functions*/
      /*Asthma (id=dAst) functions*/
      function cort() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 2;
        var minInj = document.getElementById('pred1');
        var maxInj = document.getElementById('pred2');
        if (maxDosage < 60) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 60) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Asthma (id=dAst) functions*/
      /*Pneumocystis Pneumonia (id=dMocy) functions*/
      function moni() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 100;
        maxDosage = weight * 120;
        var minInj = document.getElementById('mox1');
        var maxInj = document.getElementById('mox2');
        if (maxDosage < 960) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 960) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function zole() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 25;
        var minInj = document.getElementById('zol1');
        var maxInj = document.getElementById('zol2');
        if (maxDosage < 480) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 480) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function solone() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 2;
        var minInj = document.getElementById('solo1');
        var maxInj = document.getElementById('solo2');
        if (maxDosage < 60) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 60) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Pneumocystis Pneumonia (id=dMocy) functions*/
      /*Tuberculosis (id=dTub) functions*/
      function iso() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('zid1');
        var maxInj = document.getElementById('zid2');
        if (maxDosage < 300) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 300) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function rif() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 20;
        var minInj = document.getElementById('fam1');
        var maxInj = document.getElementById('fam2');
        if (maxDosage < 600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function pyra() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 40;
        var minInj = document.getElementById('zina1');
        var maxInj = document.getElementById('zina2');
        if (maxDosage < 1500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function etha() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 15;
        maxDosage = weight * 25;
        var minInj = document.getElementById('eth1');
        var maxInj = document.getElementById('eth2');
        if (maxDosage < 1600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function inflam() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 2;
        var minInj = document.getElementById('lam1');
        var maxInj = document.getElementById('lam2');
        if (maxDosage < 60) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 60) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function neuro() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2.5;
        maxDosage = weight * 2.5;
        var minInj = document.getElementById('path1');
        var maxInj = document.getElementById('path2');
        if (maxDosage < 50) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 50) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Tuberculosis (id=dTub) functios*/
      /*Croup (id=dCro) functions*/
      function mild() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('ild1');
        var maxInj = document.getElementById('ild2');
        if (maxDosage < 40) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 40) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function dexa() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.15;
        maxDosage = weight * 0.15;
        var minInj = document.getElementById('ex1');
        var maxInj = document.getElementById('ex2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function adre() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.4;
        maxDosage = weight * 0.4;
        var minInj = document.getElementById('dre1');
        var maxInj = document.getElementById('dre2');
        if (maxDosage < 5) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 5) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function xame() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.6;
        maxDosage = weight * 0.6;
        var minInj = document.getElementById('dex1');
        var maxInj = document.getElementById('dex2');
        if (maxDosage < 12) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 12) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Croup (id=dCro) functions*/
      /*Balanitis (id=dBal) functions*/
      function bal() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 50;
        var minInj = document.getElementById('lab1');
        var maxInj = document.getElementById('lab2');
        if (maxDosage <= 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function mole() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('lome1');
        var maxInj = document.getElementById('lome2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Balanitis (id=dBal) functions*/
      /*Status Epilepticus (id=dEpi) functions*/
      function pheno() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 20;
        var minInj = document.getElementById('neo1');
        var maxInj = document.getElementById('neo2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function midazo() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.1;
        var minInj = document.getElementById('zola1');
        var maxInj = document.getElementById('zola2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function diaze() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.3;
        var minInj = document.getElementById('zepa1');
        var maxInj = document.getElementById('zepa2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function diazes() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.2;
        maxDosage = weight * 0.5;
        var minInj = document.getElementById('zepas1');
        var maxInj = document.getElementById('zepas2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function mapez() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.05;
        maxDosage = weight * 0.1;
        var minInj = document.getElementById('pez1');
        var maxInj = document.getElementById('pez2');
        if (maxDosage < 4) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 4) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function pheny() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 20;
        var minInj = document.getElementById('oin1');
        var maxInj = document.getElementById('oin2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function fosph() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 20;
        var minInj = document.getElementById('sofp1');
        var maxInj = document.getElementById('sofp2');
        if (maxDosage < (weight * 10)) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < (weight * 10)) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function valp() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 40;
        var minInj = document.getElementById('na1');
        var maxInj = document.getElementById('na2');
        if (maxDosage < 2500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function lever() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = (weight * 20)/1000;
        maxDosage = (weight * 30)/1000;
        var minInj = document.getElementById('race1');
        var maxInj = document.getElementById('race2');
        if (maxDosage < 3) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 3) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function tri() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 100;
        var minInj = document.getElementById('fan1');
        var maxInj = document.getElementById('fan2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Status Epilepticus (id=dEpi) functions*/
      /*Acute Bacterial Meningitis (id=dMen) functions*/
      function ngitis()  {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = (weight * 100)/1000;
        maxDosage = (weight * 100)/1000;
        var minInj = document.getElementById('tis1');
        var maxInj = document.getElementById('tis2');
        if (maxDosage < 2) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function fota() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 50;
        var minInj = document.getElementById('fot1').innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        var maxInj = document.getElementById('fot2').innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }
      function chloram() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 25;
        var minInj = document.getElementById('col1');
        var maxInj = document.getElementById('col2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function amp() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 25;
        var minInj = document.getElementById('lys1');
        var maxInj = document.getElementById('lys2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function tory() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.15;
        maxDosage = weight * 0.15;
        var minInj = document.getElementById('mam1');
        var maxInj = document.getElementById('mam2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function cranial() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('pre1');
        var maxInj = document.getElementById('pre2');
        if (maxDosage < 80) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 80) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function mann() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = (weight * 500)/1000;
        maxDosage = (weight * 1000)/1000;
        var minInj = document.getElementById('tol1');
        var maxInj = document.getElementById('tol2');
        if (maxDosage < 28) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 28) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "g";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Acute Bacterial Meningitis (id=dMen) functions*/
      /*Coma (id=dCom) functions*/
      function com() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2;
        maxDosage = weight * 2;
        var minInj = document.getElementById('amo1');
        var maxInj = document.getElementById('amo2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function nalo() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.1;
        var minInj = document.getElementById('oxo1');
        var maxInj = document.getElementById('oxo2');
        if (maxDosage < 2) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Coma (id=dCom) functions*/
      /*Rheumatic Fever (id=dRheu) functions*/
      function rheu() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 7.5;
        maxDosage = weight * 15;
        var minInj = document.getElementById('matic1');
        var maxInj = document.getElementById('matic2');
        if (maxDosage < 2000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function revef() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 10;
        var minInj = document.getElementById('fer1');
        var maxInj = document.getElementById('fer2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function preven() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 12.5;
        maxDosage = weight * 25;
        var minInj = document.getElementById('dary1');
        var maxInj = document.getElementById('dary2');
        if (maxDosage <= 250) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 250) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function secMycin() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 12.5;
        maxDosage = weight * 25;
        var minInj = document.getElementById('even1');
        var maxInj = document.getElementById('even2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function asp() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 25;
        var minInj = document.getElementById('irin1');
        var maxInj = document.getElementById('irin2');
        if (maxDosage < 600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function aspl() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 18.75;
        maxDosage = weight * 18.75;
        var minInj = document.getElementById('irinl1');
        var maxInj = document.getElementById('irinl2');
        if (maxDosage < 600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function card() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.5;
        maxDosage = weight * 0.5;
        var minInj = document.getElementById('sitir1');
        var maxInj = document.getElementById('sitir2');
        if (maxDosage < 60) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 60) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function chor() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.005;
        maxDosage = weight * 0.015;
        var minInj = document.getElementById('are1');
        var maxInj = document.getElementById('are2');
        if (maxDosage < 5) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 5) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Rheumatic Fever (id=dRheu) functions*/
      /*Congestive Heart Failure (id=dCon) functions*/
      function fruse() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('ruse1');
        var maxInj = document.getElementById('ruse2');
        if (maxDosage < 40) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 40) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function prel() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('load1');
        var maxInj = document.getElementById('load2');
        if (maxDosage < 15) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 15) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function reduc() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.1;
        var minInj = document.getElementById('nole1');
        var maxInj = document.getElementById('nole2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function dig() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.025;
        maxDosage = weight * 0.045;
        var minInj = document.getElementById('gixo1');
        var maxInj = document.getElementById('gixo2');
        if (maxDosage < 1) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function dop() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 20;
        var minInj = document.getElementById('amine1');
        var maxInj = document.getElementById('amine2');
        if (maxDosage < (weight *50)) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < (weight *50)) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }      
      }
      function dob() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2;
        maxDosage = weight * 20;
        var minInj = document.getElementById('uta1');
        var maxInj = document.getElementById('uta2');
        if (maxDosage < (weight * 20)) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < (weight * 20)) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function amri() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2;
        maxDosage = weight * 10;
        var minInj = document.getElementById('none1');
        var maxInj = document.getElementById('none2');
        if (maxDosage < (weight * 10)) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < (weight * 10)) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function milri() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.375;
        maxDosage = weight * 0.75;
        var minInj = document.getElementById('mil1');
        var maxInj = document.getElementById('mil2');
        if (maxDosage < (weight * 1)) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < (weight * 1)) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function capto() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.01;
        maxDosage = weight * 0.3;
        var minInj = document.getElementById('top1');
        var maxInj = document.getElementById('top2');
        if (maxDosage < 25) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 25) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function enala() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('lrp1');
        var maxInj = document.getElementById('lrp2');
        if (maxDosage < 40) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 40) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function lisin() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.07;
        maxDosage = weight * 0.6;
        var minInj = document.getElementById('opr1');
        var maxInj = document.getElementById('opr2');
        if (maxDosage < 40) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 40) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function nitro() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.25;
        maxDosage = weight * 0.5;
        var minInj = document.getElementById('uss1');
        var maxInj = document.getElementById('uss2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mcg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Congestive Heart Failure (id=dCon) functions*/
      /*Hypertension (id=dHyper) functions*/
      function hydra() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.25;
        maxDosage = weight * 0.5;
        var minInj = document.getElementById('ral1');
        var maxInj = document.getElementById('ral2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function labeta() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.2;
        maxDosage = weight * 0.4;
        var minInj = document.getElementById('hyper1');
        var maxInj = document.getElementById('hyper2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function pril() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 1;
        var minInj = document.getElementById('pot1');
        var maxInj = document.getElementById('pot2');
        if (maxDosage < 50) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 50) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Hypertension (id=dHyper) functions*/
      /*Urinary Tract Infection (id=dUri) functions*/
      function uri() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('ryn1');
        var maxInj = document.getElementById('ryn2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function tract() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 25;
        maxDosage = weight * 30;
        var minInj = document.getElementById('tra1');
        var maxInj = document.getElementById('tra2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function triSec() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 75;
        var minInj = document.getElementById('trin1');
        var maxInj = document.getElementById('trin2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function triCef() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 50;
        maxDosage = weight * 50;
        var minInj = document.getElementById('nefo1');
        var maxInj = document.getElementById('nefo2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function triGen() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2;
        maxDosage = weight * 5;
        var minInj = document.getElementById('gento1');
        var maxInj = document.getElementById('gento2');
        if (maxDosage < 240) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 240) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function triCot() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 6;
        maxDosage = weight * 12;
        var minInj = document.getElementById('cotep1');
        var maxInj = document.getElementById('cotep2');
        if (maxDosage < 240) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 240) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function triNit() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1;
        maxDosage = weight * 2;
        var minInj = document.getElementById('furan1');
        var maxInj = document.getElementById('furan2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Urinary Tract Infection (id=dUri) functions*/
      /*Burns (id=dbur) functions*/
      function burgesic() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('gesic1');
        var maxInj = document.getElementById('gesic2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function burmorph() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.1;
        maxDosage = weight * 0.2;
        var minInj = document.getElementById('morph1');
        var maxInj = document.getElementById('morph2');
        if (maxDosage < 10) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 10) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function bursal() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 3;
        maxDosage = weight * 4;
        var minInj = document.getElementById('burflu1');
        var maxInj = document.getElementById('burflu2');
        if (maxDosage < 2000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 2000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Burns (id=dbur) functions*/
      /*Aseptic Meningitis (id=dasep) functions*/
      function menisa() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('menis1');
        var maxInj = document.getElementById('menis2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function emetic() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.25;
        maxDosage = weight * 0.25;
        var minInj = document.getElementById('emet1');
        var maxInj = document.getElementById('emet2');
        if (maxDosage < 8) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 8) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function ondan() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.15;
        maxDosage = weight * 0.2;
        var minInj = document.getElementById('ndan1');
        var maxInj = document.getElementById('ndan2');
        if (maxDosage < 4) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 4) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function acycle() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        var initB = Math.sqrt(((weight * height))/3600);
        var minInj = document.getElementById('cyc1');
        var maxInj = document.getElementById('cyc2');
        var bsq = Math.round(initB*100)/100;
        minDosage = bsq * 500;
        maxDosage = bsq * 500;
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function meavit() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        /*minDosage = bsq * 500;
        maxDosage = bsq * 500;
        var minInj = document.getElementById('cyc1').innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        var maxInj = document.getElementById('cyc2').innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";*/
      }
      /*Aseptic Meningitis (id=dasp) functions*/
      /*Measles (id=dmeasl) functions*/
      function pyret() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('pyret1');
        var maxInj = document.getElementById('pyret2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function globul() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.25;
        maxDosage = weight * 0.5;
        var minInj = document.getElementById('globul1');
        var maxInj = document.getElementById('globul2');
        if (maxDosage < 15) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 15) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Measles (id=dmeasl) functions*/
      /*Mumps (id=dmump) functions*/
      function mumps() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 15;
        var minInj = document.getElementById('mumps1');
        var maxInj = document.getElementById('mumps2');
        if (maxDosage < 1000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function mumibu() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 4;
        maxDosage = weight * 10;
        var minInj = document.getElementById('mumibu1');
        var maxInj = document.getElementById('mumibu2');
        if (maxDosage < 400) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 400) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Mumps (id=dmump) functions*/
      /*Candidiasis Mucosal (id=dcandid) functions*/
      function candflu() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 3;
        maxDosage = weight * 6;
        var minInj = document.getElementById('candfl1');
        var maxInj = document.getElementById('candfl2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Candidiasis Mucosal (id=dcandid) functions*/
      /*Cryptococcal Meningitis (id=dcrypto) functions*/
      function amphot() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 0.25;
        maxDosage = weight * 1.5;
        var minInj = document.getElementById('amphot1');
        var maxInj = document.getElementById('amphot2');
        if (maxDosage < 50) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 50) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function liposoma() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 3;
        maxDosage = weight * 5;
        var minInj = document.getElementById('liposoma1');
        var maxInj = document.getElementById('liposoma2');
        if (maxDosage < 250) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 250) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function consoinjec() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 12;
        var minInj = document.getElementById('consoinjec1');
        var maxInj = document.getElementById('consoinjec2');
        if (maxDosage < 800) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 800) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function flucomain() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 6;
        maxDosage = weight * 6;
        var minInj = document.getElementById('flucomain1');
        var maxInj = document.getElementById('flucomain2');
        if (maxDosage < 400) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 400) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Cryptococcal Meningitis (id=dcrypto) functions*/
      /*Severe Malaria (id=dmala) functions*/
      function malarte() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2.4;
        maxDosage = weight * 3;
        var minInj = document.getElementById('malarte1');
        var maxInj = document.getElementById('malarte2');
        if (maxDosage < 180) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 180) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function quiarte() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 20;
        maxDosage = weight * 20;
        var minInj = document.getElementById('quiarte1');
        var maxInj = document.getElementById('quiarte2');
        if (maxDosage < 600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function noarte() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 1.6;
        maxDosage = weight * 3.2;
        var minInj = document.getElementById('noarte1');
        var maxInj = document.getElementById('noarte2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function quinjec() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 10;
        maxDosage = weight * 20;
        var minInj = document.getElementById('quinjec1');
        var maxInj = document.getElementById('quinjec2');
        if (maxDosage < 600) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 600) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Severe Malaria (id=dmala) functions*/
      /*Non Severe Malaria (id=darte) fucntions*/
      function artesun() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2.4;
        maxDosage = weight * 3;
        var minInj = document.getElementById('artesun1');
        var maxInj = document.getElementById('artesun2');
        if (maxDosage < 180) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 180) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function malprophy() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 3;
        maxDosage = weight * 3;
        var minInj = document.getElementById('malprophy1');
        var maxInj = document.getElementById('malprophy2');
        if (maxDosage < 200) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 200) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function melfo() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 5;
        maxDosage = weight * 5;
        var minInj = document.getElementById('melfo1');
        var maxInj = document.getElementById('melfo2');
        if (maxDosage < 250) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 250) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function doxyc() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 2;
        maxDosage = weight * 2;
        var minInj = document.getElementById('doxyc1');
        var maxInj = document.getElementById('doxyc2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Non Severe Malaria (id=darte) fucntions*/
      /*Acute Gastroenteritis(id=dgastro) functions*/
      function gasenter() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 30;
        maxDosage = weight * 70;
        var minInj = document.getElementById('gasenter1');
        var maxInj = document.getElementById('gasenter2');
        if (maxDosage < 2000) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximu dosage exceeded");
        }
        if (minDosage <  2000) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function rehyd() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 75;
        maxDosage = weight * 75;
        var minInj = document.getElementById('rehyd1');
        var maxInj = document.getElementById('rehyd2');
        if (maxDosage < 1500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 1500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      function goinloss() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 5;
        maxDosage = weight * 10;
        var minInj = document.getElementById('goinloss1');
        var maxInj = document.getElementById('goinloss2');
        if (maxDosage < 500) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 500) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
      /*Acute Gastroenteritis(id=dgastro) functions*/
      /*Candidiasis Systemic functions*/
      function casys() {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        minDosage = weight * 3;
        maxDosage = weight * 6;
        var minInj = document.getElementById('casys1');
        var maxInj = document.getElementById('casys2');
        if (maxDosage < 100) {
          maxInj.innerHTML = (Math.round(maxDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          maxInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
        if (minDosage < 100) {
          minInj.innerHTML = (Math.round(minDosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
        } else {
          minInj.innerHTML = ("Maximum dosage exceeded, administer absolute maximum dosage");
        }
      }
        /*Candidiasis Systemic functions */
      function diagPicker(diagnosis) {
        var selectObject = Diag.diag;
        var diagnoses = ["Select", "Acute Bacterial Meningitis", "Acute Bacterial Sinusitis", "Acute Gastroenteritis","Acute Otitis Media", "Allergic Rhinitis","Aseptic Meningitis","Aspiration Pneumonia", "Asthma", "Balanitis", "Burns", "Candidiasis Cutaneous", "Candidiasis Mucosal", "Candidiasis Systemic", "Coma", "Congestive Heart Failure", "Croup", "Cryptococcal Meningitis", "Hypertension", "Measles",
        "Mumps", "Non Severe Malaria", "Pneumocystis Pneumonia", "Pneumonia", "Rheumatic Fever", "Severe Malaria", "Status Epilepticus", "Tonsillopharyngitis", "Tuberculosis", "Urinary Tract Infection"];
        var diagnosis = diagnoses[selectObject.selectedIndex];
        if (diagnosis === "Select") {
          document.getElementById("par").style.display = "block";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Pneumonia") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "block";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }  else if (diagnosis === "Tonsillopharyngitis") {
         document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "block";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Acute Otitis Media") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "block";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Allergic Rhinitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "block";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Acute Bacterial Sinusitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "block";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Aspiration Pneumonia") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "block";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Asthma") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "block";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Pneumocystis Pneumonia") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "block";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Tuberculosis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "block";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Croup") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "block";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Urinary Tract Infection") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "block";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Balanitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "block";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Status Epilepticus") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "block";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Acute Bacterial Meningitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "block";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Coma") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "block";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Rheumatic Fever") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "block";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Congestive Heart Failure") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "block";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Hypertension") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "block";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Burns") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "block";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        } else if (diagnosis === "Aseptic Meningitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "block";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Measles") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "block";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Mumps") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "block";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Candidiasis Mucosal") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "block";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Candidiasis Cutaneous") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "block";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Candidiasis Systemic") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "block";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Cryptococcal Meningitis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "block";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Non Severe Malaria") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "block";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Severe Malaria") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "block";
          document.getElementById("dgastro").style.display = "none";
        }else if (diagnosis === "Acute Gastroenteritis") {
          document.getElementById("par").style.display = "none";
          document.getElementById("dPneu").style.display = "none";
          document.getElementById("dTons").style.display = "none";
          document.getElementById("dAcu").style.display = "none";
          document.getElementById("dRhin").style.display = "none";
          document.getElementById("dBAc").style.display = "none";
          document.getElementById("dAsp").style.display = "none";
          document.getElementById("dAst").style.display = "none";
          document.getElementById("dMocy").style.display = "none";
          document.getElementById("dTub").style.display = "none";
          document.getElementById("dCro").style.display = "none";
          document.getElementById("dUri").style.display = "none";
          document.getElementById("dBal").style.display = "none";
          document.getElementById("dEpi").style.display = "none";
          document.getElementById("dMen").style.display = "none";
          document.getElementById("dCom").style.display = "none";
          document.getElementById("dRheu").style.display = "none";
          document.getElementById("dCon").style.display = "none";
          document.getElementById("dHyper").style.display = "none";
          document.getElementById("dbur").style.display = "none";
          document.getElementById("dasep").style.display = "none";
          document.getElementById("dmeasl").style.display = "none";
          document.getElementById("dmump").style.display = "none";
          document.getElementById("dcandid").style.display = "none";
          document.getElementById("dcutan").style.display = "none";
          document.getElementById("dsystem").style.display = "none";
          document.getElementById("dcrypto").style.display = "none";
          document.getElementById("darte").style.display = "none";
          document.getElementById("dmala").style.display = "none";
          document.getElementById("dgastro").style.display = "block";
        }
      }

    /*Emergency medication functions*/
    function EPicker(diagnosis) {
        var selectorObject = emergency.slct;
        var meds = ["Select", "Bolus medicines", "Anticonvulsant and CNS drugs", "Infusions (Sedation, Inotropes and Useful Agents)","Muscle relaxation and intubation drugs", "Antimicrobials","Other Medications"];
        var med = meds[selectorObject.selectedIndex];
        if (med === "Select") {
          document.getElementById("para").style.display = "block";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Bolus medicines") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "block";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Anticonvulsant and CNS drugs") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "block";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Infusions (Sedation, Inotropes and Useful Agents)") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "block";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Muscle relaxation and intubation drugs") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "block";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Antimicrobials") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "block";
          document.getElementById("Mother").style.display = "none";
        } else if (med === "Other Medications") {
          document.getElementById("para").style.display = "none";
          document.getElementById("Mbolus").style.display = "none";
          document.getElementById("Manticon").style.display = "none";
          document.getElementById("Minfu").style.display = "none";
          document.getElementById("Mrelax").style.display = "none";
          document.getElementById("Mmicro").style.display = "none";
          document.getElementById("Mother").style.display = "block";
        }
      }

      /* Bolus functions */
      function adre() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.1;
        var minInj = document.getElementById('adre1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }

      function Adeno() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.1;
        var minInj = document.getElementById('Adeno1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function Atro() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.03;
        var minInj = document.getElementById('Atro1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }

      function na() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 1;
        var minInj = document.getElementById('na1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }

      function ca() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.5;
        var minInj = document.getElementById('ca1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }

      function mg() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 40;
        var minInj = document.getElementById('mg1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function sync() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 1;
        var minInj = document.getElementById('sync1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "J";
      }

      function async() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 4;
        var minInj = document.getElementById('async1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "J";
      }
    /* Bolus functions */
    /* Anticonvulsant and CNS drugs */
      function raze() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.1;
        var minInj = document.getElementById('raze1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function zolam() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.1;
        var minInj = document.getElementById('zolam1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function iv() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 20;
        var minInj = document.getElementById('iv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function iv2() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 5;
        var minInj = document.getElementById('iv21').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function barb() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 20;
        var minInj = document.getElementById('barb1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function barb2() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 5;
        var minInj = document.getElementById('barb21').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
      }

      function pr() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.4;
        var minInj = document.getElementById('pr1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }

      function toliv() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 0.5;
        var minInj = document.getElementById('toliv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "gram";
      }

      function saliv() {
        var weight = document.getElementById("Eweight").value;
        var height = document.getElementById("Eheight").value;
        Dosage = weight * 3;
        var minInj = document.getElementById('saliv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
      }
/* Anticonvulsant and CNS drugs */
/* Infusions (Sedation, Inotropes and Useful Agents) */
    function ion() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 1;
      var minInj = document.getElementById('ion1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function bus() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.1;
      var minInj = document.getElementById('bus1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function miv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 3;
      var minInj = document.getElementById('miv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function lamiv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.1;
      var minInj = document.getElementById('lamiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function piv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 3;
      var minInj = document.getElementById('piv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function niv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 30;
      var minInj = document.getElementById('niv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function riv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.3;
      var minInj = document.getElementById('riv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function tiv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.3;
      var minInj = document.getElementById('tiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function reliv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.15;
      var minInj = document.getElementById('reliv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function miliv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 1.5;
      var minInj = document.getElementById('miliv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }

    function stin() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 30;
      var minInj = document.getElementById('stin1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
    }

    function fusi() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 5;
      var minInj = document.getElementById('fusi1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "UNITS";
    }

    function lemia() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 0.2;
      var minInj = document.getElementById('lemia1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "UNITS";
    }

    function tamoliv() {
      var weight = document.getElementById("Eweight").value;
      var height = document.getElementById("Eheight").value;
      Dosage = weight * 1.5;
      var minInj = document.getElementById('tamoliv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
    }
  /* Infusions (Sedation, Inotropes and Useful Agents) */
  /* Muscle relaxation and intubation drugs */
  function meth() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('meth1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function curo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('curo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function panc() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.1;
    var minInj = document.getElementById('panc1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function fiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 2;
    var minInj = document.getElementById('fiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }

  function nyiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 6;
    var minInj = document.getElementById('nyiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function kiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 2;
    var minInj = document.getElementById('kiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function kiev() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 60;
    var minInj = document.getElementById('kiev1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function propiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 5;
    var minInj = document.getElementById('propiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function thiopiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 5;
    var minInj = document.getElementById('thiopiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function etom() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.3;
    var minInj = document.getElementById('etom1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function hytom() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 2;
    var minInj = document.getElementById('hytom1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function feniv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 2;
    var minInj = document.getElementById('feniv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }

  function remif() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 3;
    var minInj = document.getElementById('remif1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function atra() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.4;
    var minInj = document.getElementById('atra1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function ciast() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.15;
    var minInj = document.getElementById('ciast1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function sucho() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 2;
    var minInj = document.getElementById('sucho1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }
/* Muscle relaxation and intubation drugs */
/*Antimicrobiols */
  function benzil() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 5000;
    var minInj = document.getElementById('benzil1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "UNITS";
  }

  function xiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 30;
    var minInj = document.getElementById('xiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function gentiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 5;
    var minInj = document.getElementById('gentiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function amiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 15;
    var minInj = document.getElementById('amiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function triv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 50;
    var minInj = document.getElementById('triv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function cefotiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 50;
    var minInj = document.getElementById('cefotiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function feciv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 25;
    var minInj = document.getElementById('feciv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function zidiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 50;
    var minInj = document.getElementById('zidiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  /*function nyspo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 100000;
    var minInj = document.getElementById('nyspo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "UNITS";
  }*/

  function merov() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 40;
    var minInj = document.getElementById('merov1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function vanciv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 15;
    var minInj = document.getElementById('vanciv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function clathiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 7.5;
    var minInj = document.getElementById('clathiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function tazov() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 90;
    var minInj = document.getElementById('tazov1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function cotiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 120;
    var minInj = document.getElementById('cotiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function fluv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 6;
    var minInj = document.getElementById('fluv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function clov() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 20;
    var minInj = document.getElementById('clov1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }
/* Antimicrobiols */
/* Other Medications */
  function omep() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.5;
    var minInj = document.getElementById('omep1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function furiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('furiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function spiro() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('spiro1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function gidiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 10;
    var minInj = document.getElementById('gidiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }

  function nophiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.7;
    var minInj = document.getElementById('nophiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function cortiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 3;
    var minInj = document.getElementById('cortiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function thasone() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.1;
    var minInj = document.getElementById('thasone1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function mapiv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.01;
    var minInj = document.getElementById('mapiv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }

  function baclopo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.1;
    var minInj = document.getElementById('baclopo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function ibupo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 8;
    var minInj = document.getElementById('ibupo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function lacupo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.5;
    var minInj = document.getElementById('lacupo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mL";
  }

  function xalapo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('xalapo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function capo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 40;
    var minInj = document.getElementById('capo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function phopo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('phopo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mmol";
  }

  function phopo100() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('phopo1001').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mmol";
  }

  function nopi() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 6;
    var minInj = document.getElementById('nopi1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function potaci() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('potaci1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mmol";
  }

  function chloriv() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('chloriv1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mmol";
  }

  function glycor() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 30;
    var minInj = document.getElementById('glycor1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }

  /*function bromid() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0;
    var minInj = document.getElementById('bromid1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "MCG";
  }*/

  function hybro() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 0.4;
    var minInj = document.getElementById('hybro1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }

  function fecopo() {
    var weight = document.getElementById("Eweight").value;
    var height = document.getElementById("Eheight").value;
    Dosage = weight * 1;
    var minInj = document.getElementById('fecopo1').innerHTML = (Math.round(Dosage * 100)/100).toLocaleString().replace(/,/g," ",) + "mg";
  }
/* Other Medications */