function accFunction() {

    var bname = document.getElementById('bname').value;
    var branchcheck  = /^[A-Za-z]{3,40}$/;
    if (branchcheck.test(bname))
    {
          document.getElementById('brancherror').innerHTML=" ";
    }
    else
    {
        document.getElementById('brancherror').style.color="red";
          document.getElementById('brancherror').innerHTML=" ** BranchName Should be between 3 to 40 charcter ";
    }
}
function accFunction1() {

    var atype = document.getElementById('atype').value;
    var typecheck  = /^(S|C){1}$/;
    if (typecheck.test(atype))
    {
          document.getElementById('typeerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('typeerror').style.color="red";
          document.getElementById('typeerror').innerHTML=" ** Account type Should be of 1 charcter in capital ";
    }
}

function accFunction2() {

    var abalance = document.getElementById('abalance').value;
    var balancecheck  = /^(([0-9]{1,8})|(([0-9]{1,8})\.[0-9]{1,2}))$/;
    if (balancecheck.test(abalance))
    {
          document.getElementById('balanceerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('balanceerror').style.color="red";
          document.getElementById('balanceerror').innerHTML=" ** Account Balance should be in digits and precision after decimal point is 2 ";
    }
}