const t=()=>{const t=URL.createObjectURL(new Blob([])),e=t.toString();return URL.revokeObjectURL(t),e.substring(e.lastIndexOf("/")+1)};export{t as UUID};
