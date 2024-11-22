import Header from "./header";

export const AppLayout = ({children, showHeader=true, loggedIn}) => {
    return (
      <div className="h-screen w-full bg-gray-50">
       {showHeader && 
       <Header isLoggedIn={loggedIn} />
       }
          <div className="pt-16">
            {children}
          </div>
        </div>
    );
};