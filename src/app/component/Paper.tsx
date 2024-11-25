'use client'
import { ChangeEvent, FormEvent, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db } from '@/app/firebase';

interface PaperData {
  PaperTitle: string;
  Abstract: File | null;
  CorrespondingAuthor: string;
  CoAuthor: string;
  FileInWord: File | null;
  FileInPdf: File | null;
  Keywords: string;
}

const Paper = () => {
  const initialFormData: PaperData = {
    PaperTitle: '',
    Abstract: null,
    CorrespondingAuthor: '',
    CoAuthor: '',
    FileInWord: null,
    FileInPdf: null,
    Keywords: '',
  };

  const [formData, setFormData] = useState<PaperData>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (name: keyof PaperData, file: File | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleAddDocument = async (fileData: Record<string, string | null>) => {
    try {
      const docRef = await addDoc(collection(db, 'RegestrationPape'), { ...formData, ...fileData });
      console.log('Document added with ID:', docRef.id);
      setLoading(false);
      setFormData(initialFormData);
      toast.success('Successfully Registered!');
    } catch (error) {
      setLoading(false);
      toast.error('Something broke while registration!');
      console.error('Error adding document:', error);
    }
  };




const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const uploadTasks = [];
      const fileFieldNames: (keyof PaperData)[] = ['Abstract', 'FileInPdf', 'FileInWord'];
  
      
      for (const fieldName of fileFieldNames) {
        const file = formData[fieldName];
        if (file instanceof File) {
          const fileRef = ref(storage, `files/${file.name}`);
          uploadTasks.push(uploadBytes(fileRef, file));
        }
      }
  
     
      const uploadResults = await Promise.all(uploadTasks);
  
     
      const fileURLs = await Promise.all(
        uploadResults.map((result) => getDownloadURL(result.ref))
      );
  
      
      const fileData = Object.fromEntries(
        uploadTasks.map((task, index) => [task, fileURLs[index]])
      );
  
     
      const { Abstract, FileInPdf, FileInWord, ...formDataWithoutFiles } = formData;
  

      await handleAddDocument({ ...formDataWithoutFiles, ...fileData });
  
      
      setFormData(initialFormData);
  
      toast.success("Suceessfully Registered!");
    } catch (error) {
     
      console.error('Error:', error);
      toast.error("Something broke while registration!");
    } finally {
     
      toast.error("Something broke while registration!");
      setLoading(false);
    }
  };
  
 

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="PaperTitle" className="block text-sm font-medium text-gray-600">
          Paper Title:
          <input
            type="text"
            id="PaperTitle"
            name="PaperTitle"
            value={formData.PaperTitle}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
          />
        </label>
      </div>

   
      <div className="mb-4">
        <label htmlFor="Abstract" className="block text-sm font-medium text-gray-600">
          Abstract:
          <input
            id="Abstract"
            name="Abstract"
            onChange={(e) => handleFileChange('Abstract', e.target.files?.[0] || null)}
            type="file"
            accept=".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 text-black"
          />
        </label>
      </div>

<div className="mb-4">
  <label htmlFor="CorrespondingAuthor" className="block text-sm font-medium text-gray-600">
    Corresponding Author:
    <input
      type="text"
      id="CorrespondingAuthor"
      name="CorrespondingAuthor"
      value={formData.CorrespondingAuthor}
      onChange={handleInputChange}
      className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
    />
  </label>
</div>

<div className="mb-4">
  <label htmlFor="CoAuthor" className="block text-sm font-medium text-gray-600">
    Co-Author:
    <br />for more than one Co-Author write with comma separated
    <input
      type="text"
      id="CoAuthor"
      name="CoAuthor"
      value={formData.CoAuthor}
      onChange={handleInputChange}
      className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
    />
  </label>
</div>

<div className="mb-4">
  <label htmlFor="FileInPdf" className="block text-sm font-medium text-gray-600">
    File in Pdf:
    <input
      id="FileInPdf"
      name="FileInPdf"
      onChange={handleInputChange}
      type="file"
      accept=".pdf"
      className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
    />
  </label>
</div>

<div className="mb-4">
  <label htmlFor="FileInWord" className="block text-sm font-medium text-gray-600">
    File in Word:
    <input
      id="FileInWord"
      name="FileInWord"
      onChange={handleInputChange}
      type="file"
      accept=".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
    />
  </label>
</div>




      <div className="mb-4">
        <label htmlFor="Keywords" className="block text-sm font-medium text-gray-600">
          Keywords:
          <input
            type="text"
            id="Keywords"
            name="Keywords"
            value={formData.Keywords}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 border text-black"
          />
        </label>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-4 w-full"
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Paper;
