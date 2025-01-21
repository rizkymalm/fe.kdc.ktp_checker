import DialogDefault from '@/components/dialog/DialogDefault';

const DialogUserNoWorkspaceFound = () => {
    return (
        <DialogDefault
            isOpen
            image="https://kadence-internal-tools.s3.ap-southeast-3.amazonaws.com/assets/images/no-workspace-found-kadence.svg"
            content={
                <div className="flex flex-col text-center">
                    <h1 className="mt-[42px] text-2xl">
                        <b>Oopss...No workspace found.</b>
                    </h1>
                    <p className="my-[20px] text-text-md font-medium">
                        It looks like you don&apos;t have any workspaces
                        assigned to your account yet. Please contact your
                        administrator for access
                    </p>
                </div>
            }
        />
    );
};

export default DialogUserNoWorkspaceFound;
