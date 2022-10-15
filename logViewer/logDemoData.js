Vue.prototype.$exampleLogContent=
`2022-10-15 14:04:26.335  INFO 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : Starting MydemoApplication using Java 17.0.4.1 on MacBook-Air-de-Jim.local with PID 66784 (/Users/jimthai/Documents/my_projects/mydemo/target/classes started by jimthai in /Users/jimthai/Documents/my_projects/mydemo)
2022-10-15 14:04:26.340  INFO 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : No active profile set, falling back to 1 default profile: "default"
2022-10-15 14:04:27.522  INFO 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : Started MydemoApplication in 2.16 seconds (JVM running for 3.257)
2022-10-15 14:04:27.545 ERROR 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : exception trace example

java.lang.Exception: Test tracing
        at java.base/java.lang.Thread.dumpStack(Thread.java:1383)
        at com.ericgoebelbecker.stacktraces.StackTrace.d(StackTrace.java:23)
        at com.ericgoebelbecker.stacktraces.StackTrace.c(StackTrace.java:19)
        at com.ericgoebelbecker.stacktraces.StackTrace.b(StackTrace.java:15)
        at com.ericgoebelbecker.stacktraces.StackTrace.a(StackTrace.java:11)
        at com.ericgoebelbecker.stacktraces.StackTrace.main(StackTrace.java:7)
        at fr.prawinn555.demo.mydemo.MydemoApplication.main(MydemoApplication.java:16) ~[classes/:na]

2022-10-15 14:04:27.546  INFO 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : XML trace example 
        <!DOCTYPE glossary PUBLIC "-//OASIS//DTD DocBook V3.1//EN">
        <glossary><title>example glossary</title>
         <GlossDiv><title>S</title>
          <GlossList>
           <GlossEntry ID="SGML" SortAs="SGML">
                <GlossTerm>Standard Generalized Markup Language</GlossTerm>
                <Acronym>SGML</Acronym>
                <Abbrev>ISO 8879:1986</Abbrev>
                <GlossDef>
                 <para>A meta-markup language, used to create markup
   languages such as DocBook.</para>
                 <GlossSeeAlso OtherTerm="GML" />
                 <GlossSeeAlso OtherTerm="XML" />
                </GlossDef>
                <GlossSee OtherTerm="markup" />
           </GlossEntry>
          </GlossList>
         </GlossDiv>
        </glossary>


2022-10-15 14:04:27.548  INFO 66784 --- [           main] f.p.demo.mydemo.MydemoApplication        : JSON trace example 
        {
        "glossary": {
                "title": "example glossary",
                "GlossDiv": {
                        "title": "S",
                        "GlossList": {
                                "GlossEntry": {
                                        "ID": "SGML",
                                        "SortAs": "SGML",
                                        "GlossTerm": "Standard Generalized Markup Language",
                                        "Acronym": "SGML",
                                        "Abbrev": "ISO 8879:1986",
                                        "GlossDef": {
                                                "para": "A meta-markup language, used to create markup languages such as DocBook.",
                                                "GlossSeeAlso": ["GML", "XML"]
                                        },
                                        "GlossSee": "markup"
                                }
                        }
                }
        }
}
`