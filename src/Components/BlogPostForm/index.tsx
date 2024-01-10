import { useState } from "react";

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    introduction: "",
    sections: [],
    conclusion: "",
    authors: "",
    disclaimer: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  {
    /**
 const handleSectionChange = (index: any, content: any) => {
    const updatedSections = [...formData.sections];
    updatedSections: [index] = content;
    setFormData({ ...formData, sections: updatedSections });
  };


*/
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement your logic to submit the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <label>Introduction:</label>
      <textarea
        name="introduction"
        value={formData.introduction}
        onChange={handleInputChange}
        required
      />

      {/* Add input fields for other sections like components, state, etc. */}

      <label>Conclusion:</label>
      <textarea
        name="conclusion"
        value={formData.conclusion}
        onChange={handleInputChange}
        required
      />

      <label>Authors:</label>
      <textarea
        name="authors"
        value={formData.authors}
        onChange={handleInputChange}
        required
      />

      <label>Disclaimer:</label>
      <textarea
        name="disclaimer"
        value={formData.disclaimer}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;
