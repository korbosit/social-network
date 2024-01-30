import React from "react"; // Убедитесь, что вы импортируете React

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />;
            </Suspense>
        );
    };
};
