import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsContol/FormsContol";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLengthCreator50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLengthCreator50]}
                    placeholder="Enter your message"
                    name="newMessageBody"
                />
            </div>
            <button>Send</button>
        </form>
    );
};

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);
