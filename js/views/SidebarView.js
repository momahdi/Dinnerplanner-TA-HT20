const SidebarView= ({guests,minusOne})=>
    <div>

        <button onClick={minusOne}>-</button>
        {guests}
        <button>+</button>
    </div>