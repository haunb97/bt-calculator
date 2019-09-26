function somot() {
    let num = parseInt(document.getElementById('sss').value);
    return num;

}
function sohai() {
    let num = parseInt(document.getElementById('srr').value);
    return num;
}
function cong() {
    let a = somot();
    let b = sohai();
    let c = a + b;
    document.getElementById('hau').innerHTML = "result addtion : "+c
}
function tru() {
    let a = somot();
    let b = sohai();
    let c = a-b;
    document.getElementById('hau').innerHTML = "result sudtraction : "+c
}
function nhan() {
    let a = somot();
    let b = sohai();
    let c = a*b;
    document.getElementById('hau').innerHTML ="result multiplication : " +c
}
function chia() {
    let a = somot();
    let b = sohai();
    let c = a/b;
    document.getElementById('hau').innerHTML = "result division : "+c
}
