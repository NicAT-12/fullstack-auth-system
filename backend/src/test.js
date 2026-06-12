import bcrypt from 'bcrypt';

async function test(passwordTest) {
    const hashedPassword = await bcrypt.hash(passwordTest, 10);

    const isMatch = await bcrypt.compare(
        passwordTest,
        hashedPassword
    );

    console.log(isMatch);
};

test("123456");