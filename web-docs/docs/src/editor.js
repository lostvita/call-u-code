import { useCallback, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom';

const Editor = () => {

  const { docId } = useParams()

  const [quill, setQuill] = useState(null)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const s = io('http://localhost:3001')
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!socket || !quill) return
    const handler = (data) => {
      quill.setContents(data)
      quill.enable()
    }
    // 初始化文档内容
    socket.once('load-document', handler)
    // 设置独立的文档io通信通道
    socket.emit('set-document-id', docId)

    return () => {
      socket.off('load-document', handler)
    }
  }, [socket, quill, docId])

  useEffect(() => {
    if (quill === null || socket === null) return
    const handler = (delta, oldDelta, source) => {
      console.log(delta, oldDelta, source)
      if (source !== 'user') return
      socket.emit('send-changes', delta)
    }
    // 注册文档变更事件
    quill.on('text-change', handler)

    return () => {
      quill.off('text-change', handler)
    }
  }, [quill, socket])

  useEffect(() => {
    if (socket === null || quill === null) return
    const handler = data => {
      quill.updateContents(data)
    }
    // 注册文档同步事件
    socket.on('receive-changes', handler)
    
    return () => {
      socket.off('receive-changes', handler)
    }
  }, [socket, quill])
  
  const wrapperRef = useCallback((wrapper) => {
    if (!wrapper) return
    wrapper.innerHTML = ''
    const editor = document.createElement('div')
    wrapper.append(editor)
    const q = new Quill(editor, { theme: 'snow' })
    setQuill(q)
    q.disable()
    q.setText('Loading...')
  }, [])
  return <div className="container" ref={ wrapperRef }></div>;
};

export default Editor;