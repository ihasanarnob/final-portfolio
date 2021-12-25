import React from 'react';

const Blog1 = () => {
    return (
        <div className="container mt-3 p-2">
            <h4 className="text-primary">JSX in ReactJS:</h4>
            <h6>JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. Every JSX is converted to the React.createElement function call that the browser understands.
                Syntax of React.createElement :
                React.createElement(type, [props], [...children])
                Basically, by using JSX we can write concise HTML/XML-like structures (DOM-like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.</h6>
            <h4 className="text-primary">Characteristics of JSX:</h4>
            <h6>JSX is not mandatory to use there are other ways to achieve the same thing but JSX makes it easier to develop react applications.
                JSX allows writing expression in { }(curly bracket). The expression can be any JS expression or React variable.
                To insert a large block of HTML we have to write it in a parenthesis ().
                JSX produces react elements.
                JSX follows the XML rule.
                After compilation, JSX expressions become regular Javascript function calls.
                JSX uses camelcase notation for naming HTML attributes.</h6>

            <h4 className="text-primary"> React Hooks:</h4>
            <h6>Hooks are functions that let us “hook into” React state and lifecycle features from function components. Hooks don't work inside classes. The hooks let you use React without classes. We also can also create our own Hooks to reuse stateful behavior between different components. Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.
                Usage of React hook:
                If we write a function component, and then we want to add some state to it, Before we do this by converting it to a class. But, now we can do it by using a Hook inside the existing function component.</h6>

            <h4 className="text-primary">React Custom Hooks:</h4>
            <h6> A custom Hook is a JavaScript function. The name of custom Hook starts with "use" which can call other Hooks. A custom Hook is just like a regular function, and the word "use" in the beginning tells that this function follows the rules of Hooks. Building custom Hooks allows you to extract component logic into reusable functions.
                Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time we use a custom Hook, all states and effects inside of it are fully isolated.</h6>

            <h4 className="text-primary">Context API:</h4>
            <h6> The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application.
                By using context API, we can create a bunch of components and have a fully maintainable and concise application, without having to create a super huge component to deal with our whole application.
                After breaking components into smaller components for maintainability purposes, these small components might now need some data to work properly. If these small components need data to work with, we will have to pass data through props from the parent component to the child component. This is where we can slow down our application and cause development issues.
                The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, in some use cases, the Context API is
                ideal for theming, user language, authentication, etc
                We need to create React.createContext(). It returns a consumer and a provider. The provider is a component that as its name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</h6>

        </div>
    );
};

export default Blog1;