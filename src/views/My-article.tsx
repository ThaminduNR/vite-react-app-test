function MyArticle(){
    const data = [
        {
            id: 1,
            date:"2023-3-20",
            title: "IJSE",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
        },
        {
            id: 2,
            date:"2023-3-20",
            title: "GDSE",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
        },
        {
            id: 3,
            date:"2023-3-20",
            title: "CMJD",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
        },
        {
            id: 4,
            date:"2023-3-20",
            title: "JavaScript",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
        },
        {
            id: 5,
            date:"2023-3-20",
            title: "TypeScripts",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil repudiandae possimus magnam deserunt, animi minus, sapiente alias ab beatae maiores. Nemo reprehenderit beatae facere eum inventore asperiores magni voluptates!",
        },
    ];

    return(
        <section>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((r.Data, index:number)=>)
                    }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MyArticle;