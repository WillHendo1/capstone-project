const createCategory = async (categoryName) => {
  try {
      const response = await fetch(
        "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
        {
          method: "CREATE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const categoryAPIData = await response.json();
      console.log(categoryAPIData.message);
      return categoryAPIData.data;
  } catch (err) {
    // return err;
  }
};

const fetchCategories = async () => {
  try {
    const data = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIData = await data.json();
    console.log(categoryAPIData.message);
    return categoryAPIData.data;
  } catch (err) {
    // return err;
  }
};

const updateCategory = async (categoryId) => {
  try {
    const data = await fetch (
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
        {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    // return err;
  }
};

const deleteCategoryById = async (categoryId) => {
  try {

  } catch (err) {
    // return err;
  }
};

const categoryService = {
  createCategory, 
  fetchCategories, 
  updateCategory, 
  deleteCategoryById
};

export default categoryService;