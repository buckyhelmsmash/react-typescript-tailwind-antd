import {Button} from "antd";
import React from "react";

const RootPage = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h1 className="text-3xl font-bold underline text-red-600">
                Simple React Typescript Tailwind Sample
            </h1>
            <Button type={"primary"}>
                ASD
            </Button>
        </div>
    );
}

export default RootPage
