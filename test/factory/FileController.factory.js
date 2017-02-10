module.exports = {
  image: function image(fileName) {
    return {
      _files: [{
        stream: {
          _readableState: {
            highWaterMark: 16384,
            buffer: [new Buffer('89504e470d0a1a0a0000000d494844520000000a0000000a0803000000baec3f8f00000045504c544542ad3fffffff44ad41def0de6dbf6ba8d9a76bbf69a6d8a5dff1dec9e7c8f6fbf6f4faf482c880fbfdfb96d1949dd49cbee3bd61ba5eafdcae51b44fd2ebd174c3727ec77cb200030f00000052494441540899158d490ec0200cc43c2114e8bed0feffa90db791257b9052993c270935c380261298f1dd54f260b6740a132ff4f989e1d772afdb0e1efcd056c3cb24b373be42a82366438cd8b870cf55fa016ab401fa8c222a1b0000000049454e44ae426082', 'hex')],
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
          _eventsCount: 3,
          _maxListeners: undefined,
          _writableState: {
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
            writecb: null,
            writelen: 0,
            buffer: [],
            pendingcb: 0,
            prefinished: true,
            errorEmitted: false
          },
          writable: true,
          allowHalfOpen: true,
          _transformState: {
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
          filename: fileName,
          byteOffset: 245,
          byteCount: 3003,
          field: 'image'
        }
      }]
    };
  },

  textFile: function textFile(fileName) {
    return {
      _files: [{
        stream: {
          _readableState: {
            highWaterMark: 16384,
            buffer: [new Buffer('7b5c727466315c616e73695c616e7369637067313235325c636f636f61727466313530345c636f636f617375627274663736300a7b5c666f6e7474626c5c66305c6673776973735c6663686172736574302048656c7665746963613b7d0a7b5c636f6c6f7274626c3b5c7265643235355c677265656e3235355c626c75653235353b7d0a7b5c2a5c657870616e646564636f6c6f7274626c3b3b7d0a5c6d6172676c313434305c6d61726772313434305c766965777731303830305c7669657768383430305c766965776b696e64300a5c706172645c74783536365c7478313133335c7478313730305c7478323236375c7478323833345c7478333430315c7478333936385c7478343533355c7478353130325c7478353636395c7478363233365c7478363830335c7061726469726e61747572616c5c7061727469676874656e666163746f72300a0a5c66305c66733234205c6366302048656c6c6f7d', 'hex')],
            length: 350,
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
          _eventsCount: 3,
          _maxListeners: undefined,
          _writableState: {
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
            writecb: null,
            writelen: 0,
            buffer: [],
            pendingcb: 0,
            prefinished: true,
            errorEmitted: false
          },
          writable: true,
          allowHalfOpen: true,
          _transformState: {
            needTransform: false,
            transforming: false,
            writecb: null,
            writechunk: null,
            writeencoding: 'buffer'
          },
          headers: {
            'content-disposition': 'form-data; name="image"; filename="sample.rtf"',
            'content-type': 'text/rtf'
          },
          name: 'image',
          filename: fileName,
          byteOffset: 239,
          byteCount: 350,
          field: 'image'
        }
      }]
    };
  }
};
