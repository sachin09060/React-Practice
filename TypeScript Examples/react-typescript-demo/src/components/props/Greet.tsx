type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const {messageCount = 0 } = props
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${props.name}! This is the example of react typescript props`
          : `You have ${messageCount} of unread messages please login to see it!`}
      </h1>
    </div>
  );
};

export default Greet;
