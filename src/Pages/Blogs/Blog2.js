import React from 'react';

const Blog2 = () => {
    return (
        <div className="container mt-5 blog-container">
            <h4 className="text-primary">MongoDB CRUD operations:</h4>
            <h6>CRUD operations create, read, update, and delete documents. <br />
                MongoDB documents are modified by connecting to a server, querying the proper documents, and then changing the setting properties before sending the data back to the database to be updated. CRUD is data-oriented, and it’s standardized according to HTTP action verbs. <br />
                CRUD operation is all about- <br />
                The Create operation is used to insert new documents in the MongoDB database. <br />
                The Read operation is used to query a document in the database. <br />
                The Update operation is used to modify existing documents in the database. <br />
                The Delete operation is used to remove documents in the database.</h6>

            <h4>Create: </h4>
            <h6>Create or insert operation add new documents to a collection. There are two ways to add new documents to a collection. These are- <br />
                db.collection.insertOne() <br />
                db.collection.insertMany()</h6>

            <h6>The insertOne() operation allows us to create individual documents in a collection.</h6>
            <h6>while the insertMany() operation is used to create multiple documents in a single operation.</h6>

            <h4>Read:</h4>
            <h6>The read operations allow us to supply special query filters and criteria that let us specify which documents you want. The MongoDB documentation contains more information on the available query filters. Query modifiers may also be used to change how many results are returned. <br />
                MongoDB has two methods of reading documents from a collection: <br />
                db.collection.find() <br />
                db.collection.findOne() <br />
                find(): In order to get all the documents from a collection, we can simply use the find() method on our chosen collection. Executing just the find() method with no arguments will return all records currently in the collection. <br />
                findOne(): In order to get one document that satisfies the search criteria, we can simply use the findOne() method on our chosen collection. If multiple documents satisfy the query, this method returns the first document according to the natural order which reflects the order of documents on the disk. If no documents satisfy the search criteria, the function returns null. The function takes the following form of syntax.</h6>

            <h4>Update:</h4>
            <h6>Update operations modify existing documents in a collection. There are three ways to update documents of a collection:</h6>
            <h6>db.collection.updateOne(): <br />
                It is used to update a single document in the collection that satisfy the given criteria. <br />

                db.collection.updateMany() <br />
                It is used to update multiple documents in the collection that satisfy the given criteria.<br />

                db.collection.replaceOne() <br />
                It is used to replace a single document in the collection that satisfies the given criteria.</h6>

            <h4>Delete:</h4>
            <h6>Delete operations delete documents from a collection. Delete operations also work for a single document. We can provide delete operations with filters and criteria in order to specify which documents we would like to delete from a collection. The filter options rely on the same syntax that read operations utilize.
                There are two methods to delete documents of a collection - <br />
                db.collection.deleteOne(): <br />
                deleteOne() method removes only the first document matched by the query filtered document. <br />
                db.collection.deleteMany() <br />
                deleteMany() deletes multiple objects at once. <br /></h6>

            <h4 className="text-primary">Mongoose:</h4>

            <h6> Mongoose is a NodeJS-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. Mongoose aims to solve is allowing developers to enforce a specific schema at the application layer. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.Mongoose is a JavaScript framework that is commonly used in a Node. js application with a MongoDB database. <br />
            </h6>



        </div>
    );
};

export default Blog2;