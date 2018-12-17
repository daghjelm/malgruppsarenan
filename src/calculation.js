const getTypes = (obj, arr) => {
  console.log(obj, arr)
  arr = arr.sort().reverse();
  console.log(getKeyByValue(obj, arr[0]))
  let labels = arr.map(x => getKeyByValue(obj, x))
  console.log(arr, getPercent(arr))
  return [labels, getPercent(arr)];
}

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)

const getPercent = arr => arr.map(x => Math.round(10 * (100 * x / arr.reduce((x, y) => x + y))) / 10);

const calculate = (arr) => {
  let b64 = 0.855413313620318
  let b65 = -0.584823139648755
  let b66 = -0.0389377604835256
  let b67 =  0.622389112308671
  let b68 = -0.232348207810593
  let b69 = 1.12400010302308
  let b70 =  4.03862549467479
  let b71 = 3.88507171959166
  let b72 = 2.80258665022515
  let b73 = 2.47683573890775
  let b74 = 1.87468351924371
  let b75 = 3.084347237516
  let b76 = -40.2927765466533

  let c64 = 1.46962208899697
  let c65 = -1.49935806740585
  let c66 = -1.06181465722651
  let c67 = 1.50109047452957
  let c68 = -0.636270243334467
  let c69 = 2.06165166619512 
  let c70 = 4.81918494710993
  let c71 = 4.68681352435435
  let c72 = 1.83506742186267
  let c73 = 1.44634424824923
  let c74 = 2.69815735775108
  let c75 = 2.53885571575881
  let c76 = -41.4214421497297

  let d64 = 0.147294058609997
  let d65 = 0.394540389236465
  let d66 = 1.12255576802561
  let d67 = 1.42429139774455
  let d68 = 0.313039624398307
  let d69 = 1.89457908580307
  let d70 = 3.08870283297095
  let d71 = 2.87117357143849
  let d72 = 1.87798826590215
  let d73 = 1.09217182678821
  let d74 = 2.3626945204008
  let d75 = 2.58725745591186  
  let d76 = -35.0069410649686

  let e64 = 0.96051027697977
  let e65 = -0.511446670780172
  let e66 = 0.160681488135191
  let e67 = 2.2802622563346
  let e68 = -0.0827951602596986
  let e69 = 2.8213225733251
  let e70 = 4.24627039607166  
  let e71 = 4.07449617998368
  let e72 = 0.343773401355693
  let e73 = 0.189895442053137
  let e74 = 3.26772391428408
  let e75 = 1.89036721162162
  let e76 = -38.5119802755581

  let utf = b76 + arr[6]*b64 + arr[8]*b65 + arr[9]*b66 + arr[10]*b67 + arr[11]*b68 + arr[13]*b69 + arr[14]*b70 + arr[15]*b71 + arr[16]*b72 + arr[17]*b73 + arr[18]*b74 + arr[19]*b75;

  let sam = c76 + arr[7]*c64 + arr[8]*c65 + arr[9]*c66 + arr[10]*c67 + arr[11]*c68 + arr[13]*c69 + arr[14]*c70 + arr[15]*c71 + arr[16]*c72 + arr[17]*c73 + arr[18]*c74 + arr[19]*c75;

  let fram = d76 + arr[7]*d64 + arr[8]*d65 + arr[9]*d66 + arr[10]*d67 + arr[11]*d68 + arr[13]*d69 + arr[14]*d70 + arr[15]*d71 + arr[16]*d72 + arr[17]*d73 + arr[18]*d74 + arr[19]*d75

  let bev = e76 + arr[7]*e64 + arr[8]*e65 + arr[9]*e66 + arr[10]*e67 + arr[11]*e68 + arr[13]*e69 + arr[14]*e70 + arr[15]*e71 + arr[16]*e72 + arr[17]*e73 + arr[18]*e74 + arr[19]*e75

  return getTypes({
      'Utforskare': utf,
      'Samhällsfokuserade': sam,
      'Framgångssträvare': fram,
      'Bevarare' : bev
  }, [utf, sam, fram, bev])
}

export default calculate