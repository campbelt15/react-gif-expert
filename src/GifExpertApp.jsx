import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) return;
        // console.log(NewCategory);
        setCategories([NewCategory, ...categories]);
    }


    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>


            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
                currentCategories={categories}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />

                ))

            }


            {/* Gif Item */}

        </>

    )
}
