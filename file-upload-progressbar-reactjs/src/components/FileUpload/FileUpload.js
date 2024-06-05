import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUploadClick = ()=>{
    setUploadProgress(0)
  }
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress);
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>File Upload with Progress Bar</h2>
      <input type="file" onClick={handleUploadClick} onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={!selectedFile}>
        Upload
      </button>
      {uploadProgress > 0 && (
        <div className="upload-container">
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}>
              {uploadProgress}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
