// Code original author: http://typedarray.org/concurrency-in-javascript/

self.addEventListener('message', messageReceived);

function messageReceived(e) {


var uInt8Arr = new Uint8Array(e.data); // 16MB

for (var i = 0; i < uInt8Arr.length; ++i) {
	uInt8Arr[i] = i*2;
}

self.postMessage([e.data]);

}
