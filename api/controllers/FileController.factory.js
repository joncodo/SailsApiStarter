module.exports = {
  getFile: function getFile() {
    return {
      _files: [
        stream: {}
      ]
    }
  }

  stream {}
  _readableState: {
    highWaterMark: 16384,
    buffer: [ < Buffer ff d8 ff e0 00 10 4 a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 84 00 09 06 07 08 07 06 15 08 07 14 15 11 15 16 15 1 d 1 a 19 18 18 18 1 b 19 20 1 b... > ],
    length: 3003,
    pipes: null,
    pipesCount: 0,
    flowing: null,
    ended: true,
    endEmitted: false,
    reading: false,
    sync: false,
    needReadable: false,
    emittedReadable: true,
    readableListening: false,
    objectMode: false,
    defaultEncoding: 'utf8',
    ranOut: false,
    awaitDrain: 0,
    readingMore: false,
    decoder: null,
    encoding: null
  },
  readable: true,
  domain: null,
  _events: {
    end: {
      [Function: g] listener: [Function: onend]
    },
    drain: [Function],
    error: [
      [Function],
      [Function]
    ]
  },
  _eventsCount: 3,
  _maxListeners: undefined,
  _writableState: WritableState {
    highWaterMark: 16384,
    objectMode: false,
    needDrain: false,
    ending: true,
    ended: true,
    finished: true,
    decodeStrings: true,
    defaultEncoding: 'utf8',
    length: 0,
    writing: false,
    corked: 0,
    sync: false,
    bufferProcessing: false,
    onwrite: [Function],
    writecb: null,
    writelen: 0,
    buffer: [],
    pendingcb: 0,
    prefinished: true,
    errorEmitted: false
  },
  writable: true,
  allowHalfOpen: true,
  _transformState: TransformState {
    afterTransform: [Function],
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: 'buffer'
  },
  headers: {
    'content-disposition': 'form-data; name="image"; filename="download (3).jpeg"',
    'content-type': 'image/jpeg'
  },
  name: 'image',
  filename: 'download (3).jpeg',
  byteOffset: 245,
  byteCount: 3003,
  field: 'image'
}
