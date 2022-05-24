import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <h2>Q1. Difference between authorization and authentication</h2>
      <p>
        Ans:
        <br />
        1. Authentication is a process of confirming the truth of an attribute
        of a single piece of data claimed true by an entity where as
        authorization is the process of specifying access rights or privileges
        to resource related to information security.
        <br />
        2. Authentication checks a person's details to identify him while
        authorization checks user's privileges to access resources.
        <br />
        3. Authentication verifies user's credentials and authorization
        validates user's permission
      </p>
      <h2>
        Q2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <br />
      <p>
        Ans: It lets us build rich, collaborative applications by allowing
        secure access to the database directly from client-side code. Data is
        persisted locally, and even while offline, realtime events continue to
        fire, giving the end user a responsive experience. <br />
        Alternative to fiebase authentication is Auth0, MongoDB, Passport, Okta,
        JSON Web Token etc.
      </p>
      <h2>
        Q3. What other services does firebase provide other than authentication
      </h2>
      <br />
      <p>
        Ans: Besides authentication, firebase provides Cloud Firestore, Cloud
        Functions, Authentication, Hosting, Cloud Storage, Google Analytics,
        Predictions, Cloud Messaging, Dynamic Links, Remote Config and others
      </p>
    </div>
  );
};
export default Blogs;
