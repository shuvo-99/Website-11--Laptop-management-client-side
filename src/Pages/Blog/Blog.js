import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <h2>Q1. Difference between javascript and nodejs</h2>
      <p>
        Ans: 1. javaScript is a client-side scripting language that is
        lightweight, cross-platform, and interpreted. Both Java and HTML have it
        built in. Node.js, on the other hand, is a server-side scripting
        language based on Google Chrome V8. As a result, network-centric
        applications are built with it. It's a distributed system designed for
        real-time data-intensive applications.
        <br />
        2. JavaScript is a simple programming language that runs in any browser
        that has the JavaScript Engine installed. Node.js, on the other hand, is
        an interpreter or execution environment for the JavaScript programming
        language. To make it more helpful, it requires libraries that can be
        conveniently accessed from JavaScript programming.
        <br />
        3. JavaScript's main advantages include a wide range of interfaces and
        interactivity and just the right amount of server contact and direct
        input to visitors. On the other hand, Node.js has a node package manager
        with over 500 modules and the ability to handle concurrent requests. It
        also has the special capability of supporting micro-service architecture
        as well as IoT.
      </p>
      <h2>Q2. Differences between sql and nosql databases.</h2>
      <br />
      <p>
        Ans: 1. SQL is rational database and NoSQL is non-rational, distributed
        Database.
        <br />
        2. SQL is vertically scallable and NoSQL is horizontally scallable.
        <br />
        3. SQL has pre-define Schema and NoSQL is dynamic schema.
        <br />
        4. SQL is not good for large dataset but NoSQL is largely preffered for
        large datasets
      </p>
      <h2>Q3. What is the purpose of jwt and how does it work?</h2>
      <br />
      <p>
        Ans: JWT (JSON Web Token) is an open standard that allows two parties —
        a client and a server — to share security information. JSON items,
        containing a set of claims, are encoded in each JWT. JWTs use a
        cryptographic technique to ensure that the claims cannot be changed
        after the token has been issued. JWTs are frequently used as OAuth
        bearer tokens. An authorization server, in this case, creates a JWT at
        the request of a client and signs it so that it cannot be changed by
        anybody else. This JWT will then be sent together with the client's
        request to a REST API. To establish whether a JWT is valid, the REST API
        will compare the signature to the payload and header. After the JWT has
        been confirmed, the REST API can use the claims to approve or deny the
        client's request.
      </p>
    </div>
  );
};
export default Blogs;
