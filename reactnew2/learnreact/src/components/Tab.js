
function Tab({children,activeTab}){


    return(
        <div>
            <nav>
                {children.map((tab,index)=> <button className={activeTab === index ? 'bg-green-100' : 'bg-gray-100'} key={index}>{tab.props.title}</button>)}
            </nav>
            {children}
        </div>
    )
}

Tab.Panel = function({children, title}){
    
    return(
        <div>{children} </div>
    )
}


export default Tab;