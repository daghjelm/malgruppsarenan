const calc = (arr) => {
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

  // let c64 = 0.855413313620318
  // let c65 = -0.584823139648755
  // let c66 = -0.0389377604835256
  // let c67 = 1.50109047452957
  // let c68 = -0.
  // let c69 = -0.
  // let c70 = -0.
  // let c71 = -0.
  // let c72 = -0.
  // let c73 = -0.
  // let c74 = -0.
  // let c75 = -0.
  // let c76 = -0.
  // let c76 = -40.2927765466533

  let utforskare = b76 + arr[6]*b64 + arr[8]*b65 + arr[9]*b66 + arr[10]*b67 + arr[11]*b68 + arr[13]*b69 + arr[14]*b70 + arr[15]*b71 + arr[16]*b72 + arr[17]*b73 + arr[18]*b74 + arr[19]*b75

  return utforskare
}

export default function calculate(arr) {
  return calc(arr)
}